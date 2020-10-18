import React from 'react';
import logo from '../media/soften_ibm.png';
import './App.css';
import Menu from './Menu.js';
import Pages from './pages.js';
import Footer from "./footer.js";

function App() {
  return (
     <div className="App">
    
      <img src={logo} className="App-logo" alt="logo" />
      <Menu/> 
      <body>
        <Pages/>
        <Footer/>
      </body>
        
    </div>
  );
}

export default App;
