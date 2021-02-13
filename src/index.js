import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import firebase, { firebaseInstance } from './firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
