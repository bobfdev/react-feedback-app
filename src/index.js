import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// App.js called in thru "App" and index.html called in through "root"
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
)