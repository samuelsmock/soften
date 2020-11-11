import React from 'react';
import logo from '../media/soften_ibm.png';
import './App.css';
import Menu from './Menu.js';
import Pages from './pages.js';
import {
  HashRouter as Router,
  
 
} from "react-router-dom";
import Footer from "./footer.js";
import DropDown from "./DropDown.js"
import horizon from "../media/blue_horizon.jpg";
class App extends React.Component {
  componentDidMount(){
      
    document.body.style.backgroundImage = `url(${horizon})`;
}

  render(){
    return (
      <Router basename= '/soften'>
      <div className="App">
        <div className = "header">
          <div></div>
          <img src={logo} className="App-logo" alt="logo" />
          <DropDown/>
        </div> 
        <Menu/> 
        <body>
          <Pages/>
          <Footer/>
        </body>
        
      </div>
      </Router>
    );
  }
}


export default App;
