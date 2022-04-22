import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/style.css';
import MainLayout from './MainLayout';
import NoMatchLayout from './NoMatchLayout';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/">
    //       <MainLayout />
    //     </Route>
    //     <Route path="/nomatch">
    //       <NoMatchLayout />
    //     </Route>
    //   </Routes>
    // </Router>
    <MainLayout />
  );
}

export default App;