import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppEl from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppEl />, document.getElementById('root'));
registerServiceWorker();
