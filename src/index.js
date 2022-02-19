import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import InputLocation from './InputLocation';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <InputLocation />
    {/* <App2 /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
