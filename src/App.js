import './App.css';
// import Converter from './components/Converter';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react'

function App() {
  const [dark, setdark] = useState(false)
  function changeTheme() {
   setdark(prevValue=>prevValue) 
  }
  useEffect(() => {
    console.log('use effect works');
  }, [dark])
  
  return (
    <div className="App" style={{ backgroundColor: dark ?'#000':'#fff'}}>
      <BrowserRouter>
        <Header toggleTheme={changeTheme} value={dark}></Header>
        <div style={{height:300}}></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
