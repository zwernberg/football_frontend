import {RECIEVE_MESSAGE, RECIEVE_MESSAGES } from '../actions/chat';

const createSocketMiddleware = (url) => {
    const _url = url;

    return store => {
        let socket;
        function init() {
            console.log(_url);
            socket = new WebSocket(_url);
            socket.onopen = function(e) {
                var data = {
                    'payload' : {
                        'type': 'RETRIEVE_MESSAGES'
                    }
                }
                socket.send(JSON.stringify(data));
            }
            socket.onmessage = function(message) {
                if (JSON.parse(message.data).type === 'messages') {
                    store.dispatch({
                        type : RECIEVE_MESSAGES,
                        payload : message
                    });
                } else {
                    store.dispatch({
                        type: RECIEVE_MESSAGE,
                        payload: message
                    })
                }
                
            };

            socket.onclose = function(e) {
                console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
                check();
            };
    
            socket.onerror = function(err) {
                console.error('Socket encountered error: ', err.message, 'Closing socket');
                socket.close();
            };
        }

        init();

        function check(){
            if(!socket || socket.readyState == 3) init();
        }
        setInterval(check, 5000);

        return next => action => {
            if(action.type == "SEND_WEBSOCKET_MESSAGE") {
                socket.send(JSON.stringify(action));
                return;
            }

            return next(action);
        }
    }
}

export default createSocketMiddleware;