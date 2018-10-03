import { REQUEST_BOXSCORE, RECIEVE_BOXSCORE } from '../actions/boxscore';

const initialState = {
    isLoading: false,
    isLoaded:  false,
}



const BoxScore = (state= initialState, action) => {
    switch (action.type) {
        case REQUEST_BOXSCORE:
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
            };
        case RECIEVE_BOXSCORE:
            return {
                ...state,
                data: action.data.boxscore,
                isLoading: false,
                isLoaded: true
            };
        default:
            return state;
    }
}

export default BoxScore