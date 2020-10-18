import React from 'react';
import logo from '../media/soften_ibm.png';
import './App.css';
import Menu from './Menu.js';
import Pages from './pages.js';
import {
  HashRouter as Router,
  
 
} from "react-router-dom";
import Footer from "./footer.js";

function App() {
  return (
    <Router>
    <div className="app">
    
        <section className="section parallax bg1">
          
        </section>
     
      
        <section className="section static">
          <img src={logo} className="App-logo" alt="logo" />
          <Menu/> 
          <body>
            <Pages/>
            <Footer/>
          </body>
        </section>
     
    </div>    
    </Router>
  );
}

export default App;
