import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Routing from './Routing.jsx';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter

// import Detail from './Components/detail.jsx'; // Correct the import statement

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <Routing/>
   </BrowserRouter>
  </React.StrictMode>
);
