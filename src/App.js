import './styles/App.css';
// import Converter from './components/Converter';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react'
import ListOfCurrencies from './components/ListOfCurrencies'

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

          <ListOfCurrencies/>

      </BrowserRouter>
    </div>
  );
}

export default App;
