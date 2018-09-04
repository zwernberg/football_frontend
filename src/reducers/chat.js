import { REQUEST_MESSAGES, RECIEVE_MESSAGES, RECIEVE_MESSAGE } from '../actions/chat';

const initialState = {
    Messages: [
    ],
    isLoading: false,
    connected: false,
}



const Matchups = (state= initialState, action) => {
    switch (action.type) {
        // case `@@websocket/${ OPEN }`:
        //     return { 
        //         ...state, 
        //         connected: true 
        //     };
        // case `@@websocket/${ CLOSE }`:
        //     return { 
        //         ...state, 
        //         connected: false 
        //     };
        case REQUEST_MESSAGES:
            return {
                ...state,
                isLoading: true
            };
        case RECIEVE_MESSAGES:
            return {
                ...state,
                Messages: [...JSON.parse(action.payload.data).payload]

            };
        case RECIEVE_MESSAGE:
            return {
                ...state,
                Messages: [...state.Messages, JSON.parse(action.payload.data).payload]
            };
        default:
            return state;
    }
}

export default Matchups