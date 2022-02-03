import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import myFunctions from './myFunctions';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let solarResults = new myFunctions();
let exampleResult = solarResults.uvIndex;
let exampleResult2 = solarResults.currentSunElevation;
