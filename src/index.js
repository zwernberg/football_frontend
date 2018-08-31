import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware,
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
