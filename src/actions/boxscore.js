export const REQUEST_BOXSCORE = 'REQUEST_BOXSCORE';
export const RECIEVE_BOXSCORE = 'RECIEVE_BOXSCORE';


export function requestBoxScore() {
    return {
        type: REQUEST_BOXSCORE,
    }
}

export function recieveBoxScore(data) {
    return {
        type: RECIEVE_BOXSCORE,
        data
    }
}

export function fetchBoxScore(leagueId, weekId, teamId) {
    return dispatch => {
        dispatch(requestBoxScore())
        return fetch(`https://schumacher.football/api/boxscore/${leagueId}/${weekId}/${teamId}`)
            .then(response => response.json())
            .then(json => dispatch(recieveBoxScore(json)))
    }
}