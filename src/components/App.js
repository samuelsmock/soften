import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../media/soften_ibm.png';
import './App.css';
import Menu from './Menu.js';
import Pages from './pages.js';
import {
  HashRouter as Router,
  
 
} from "react-router-dom";
import Footer from "./footer.js";
import DropDown from "./DropDown/DropDown.js"
import horizon from "../media/blue_horizon.jpg";
class App extends React.Component {
  componentDidMount(){
    document.body.style.backgroundImage = `url(${horizon})`
    document.addEventListener('click', this.handleClickOutside, true);  //adds listener to close the dropdown menu when the screen is touched anywhere
  }

 
  componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  render(){
    return (
      <Router basename= '/soften'>
      <div className = 'dropDown'><DropDown/></div>
      <div className="App" >
        
        <div className = "header">
          <img src={logo} className="App-logo" alt="logo" />
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
