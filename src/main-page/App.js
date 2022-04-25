import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/style.css';
import '../styles/custom.css';
import MainLayout from './MainLayout';
import NoMatchLayout from './NoMatchLayout';

function App() {
  return (
    <MainLayout />
  );
}

export default App;