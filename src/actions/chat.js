export const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
export const RECIEVE_MESSAGES = 'RECIEVE_MESSAGES';
export const RECIEVE_MESSAGE = 'RECIEVE_MESSAGE';

export const SEND_MESSAGE = 'SEND_MESSAGE';

export function requestMessages() {
    return {
        type: REQUEST_MESSAGES,
        meta: { send: true },
        payload: { messages: 'all' }
    }
}

export function sendMessage(data) {
    return {
        type: SEND_MESSAGE,
        meta: { send: true },
        payload: { message: 'test' }
    }
}

export function recieveMessages(data) {
    return {
        type: RECIEVE_MESSAGES,
        data
    }
}