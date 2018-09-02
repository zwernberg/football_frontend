import { REQUEST_STANDINGS, RECEIVE_STANDINGS } from '../actions/standings';

const initialState = {
    divisions: [],
    isLoading: false,
}



const Matchups = (state= initialState, action) => {
    switch (action.type) {
        case REQUEST_STANDINGS:
            return {
                ...state,
                isLoading: true
            };
        case RECEIVE_STANDINGS:
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