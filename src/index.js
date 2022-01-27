import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const myWebPage = (
  <>
    <p id="demo1"></p>
    <p id="demo2"></p>
    <p id="demo3"></p>
    <p id="demo4"></p>
    <p id="demo5"></p>
    <p id="demo6"></p>
    <p id="demo7"></p>
    <p id="demo8"></p>
    <p id="demo9"></p>
    <p id="demo10"></p>
    <p id="demo11"></p>
    <p id="demo12"></p>
    <p id="demo13"></p>
    <p id="demo14"></p>
    <p id="demo15"></p>
    <p id="demo16"></p>
    <p id="demo17"></p>
    <p id="demo18"></p>
    <p id="demo19"></p>
    <p id="demo20"></p>
    <p id="demo21"></p>
    <p id="demo22"></p>
    <p id="demo23"></p>
    <p id="demo24"></p>

    <div>
      <input type="text" id="uviWarning"></input>
    </div>

    <div>
      <input type="date" id="cal" name="trip-start" value="2022-01-01" min="2022-01-01" max="2022-12-31"></input>
      <button id="get-date">New Date</button>
    </div>
    <div>
      <button id="find-me">Current location</button>
    </div>
    <div>
      <button id="new-location">New location</button>
    </div>
    <div>
      <label for="fname">latitude:</label>
      <input type="number" id="lat" value="60.2"></input>
    </div>
    <div>
      <label for="fname">longitude:</label>
      <input type="number" id="lon" value="24.90"></input>
    </div>
    <a id="map-link" target="_blank"></a>
  </>);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // myWebPage,
  document.getElementById('root')
);
