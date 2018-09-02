export const REQUEST_STANDINGS = 'REQUEST_STANDINGS';
export const RECEIVE_STANDINGS = 'RECEIVE_STANDINGS';


export function requestStandings() {
    return {
        type: REQUEST_STANDINGS,
    }
}

export function recieveStandings(data) {
    return {
        type: RECEIVE_STANDINGS,
        data
    }
}

export function fetchStandings() {
    return dispatch => {
        dispatch(requestStandings())
        return fetch('https://schumacher.football/api/standings')
            .then(response => response.json())
            .then(json => dispatch(recieveStandings(json)))
    }
}