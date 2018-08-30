export const REQUEST_MATCHUPS = 'REQUEST_MATCHUPS';
export const RECIEVE_MATCHUPS = 'RECIEVE_MATCHUPS';


export function requestMatchups() {
    return {
        type: REQUEST_MATCHUPS,
    }
}

export function recieveMatchups(data) {
    return {
        type: RECIEVE_MATCHUPS,
        data
    }
}

export function fetchMatchups() {
    return dispatch => {
        dispatch(requestMatchups())
        return fetch('https://schumacher.football/api/scoreboard')
            .then(response => response.json())
            .then(json => dispatch(recieveMatchups(json)))
    }
}