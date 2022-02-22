import './styles/App.css';
// import Converter from './components/Converter';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react'

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Header ></Header>
        <div style={{height:300}}></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
