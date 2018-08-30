import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/app';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
