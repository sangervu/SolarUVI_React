import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const myWebPage = (
  <div>
    <div id="demo1"></div>
    <div id="demo2"></div>
    <div id="demo3"></div>
    <div id="demo4"></div>
    <div id="demo5"></div>
    <div id="demo6"></div>
    <div id="demo7"></div>
    <div id="demo8"></div>
    <div id="demo9"></div>
    <div id="demo10"></div>
    <div id="demo11"></div>
    <div id="demo12"></div>
    <div id="demo13"></div>
    <div id="demo14"></div>
    <div id="demo15"></div>
    <div id="demo16"></div>
    <div id="demo17"></div>
    <div id="demo18"></div>
    <div id="demo19"></div>
    <div id="demo20"></div>
    <div id="demo21"></div>
    <div id="demo22"></div>
    <div id="demo23"></div>
    <div id="demo24"></div>

    <br />
    <input type="text" id="uviWarning"></input>
    <br />
    <input type="date" id="cal" name="trip-start" value="2022-01-01" min="2022-01-01" max="2022-12-31"></input>
    <button id="get-date">New Date</button>
    <br />

    <button id="find-me">Current location</button>
    <button id="new-location">New location</button>
    <label for="fname">latitude:</label>
    <input type="number" id="lat" value="60.2"></input>
    <label for="fname">longitude:</label>
    <input type="number" id="lon" value="24.90"></input>
    <a id="map-link" target="_blank"></a>
  </div>);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  myWebPage,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
