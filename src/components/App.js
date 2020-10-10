import React from 'react';
import logo from '../media/soften_ibm.png';
import './App.css';
import Menu from './Menu.js';
import Pages from './pages.js';
import {
  HashRouter as Router,
  
 
} from "react-router-dom";

function App() {
  return (
    <Router>
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Menu/>
      <Pages/>
    </div>
    </Router>
  );
}

export default App;
