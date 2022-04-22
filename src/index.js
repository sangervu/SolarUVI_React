import React from 'react';
import ReactDOM from 'react-dom';
import App from './main-page/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';

//this is for all Moment componets. Only one timer for better performance.
Moment.startPooledTimer(1000);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
