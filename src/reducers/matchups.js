import { REQUEST_MATCHUPS, RECIEVE_MATCHUPS } from '../actions/matchups';

const initialState = {
    divisions: [],
    isLoading: false,
}



const Matchups = (state= initialState, action) => {
    switch (action.type) {
        case REQUEST_MATCHUPS:
            return {
                ...state,
                isLoading: true
            };
        case RECIEVE_MATCHUPS:
            return {
                ...state,
                ...action.data,
                isLoading: false
            };
        default:
            return state;
    }
}

export default Matchups