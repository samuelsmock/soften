import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../media/soften_ibm.png';
import './App.css';
import Menu from './Menu/Menu.js';
import Pages from './pages.js';
import {
  BrowserRouter as Router,
  
 
} from "react-router-dom";
import Footer from "./footer.js";
import DropDown from "./DropDown/DropDown.js"
import horizon from "../media/blue_horizon.jpg";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      bgImg: "../media/blue_horizon.jpg"     //Current Background Image held here in state, changes are made in Menu component
    }
  }

  componentDidMount(){
    document.body.style.backgroundImage = `url(${horizon})`;
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

  changeBackground = newImg =>{
    this.setState(
      {bgImg: newImg}
    )

  }

  render(){
    return (
      <Router basename= ''>
       
      <div className = 'dropDown'><DropDown/></div>
      <div className="App" > 
        <div className = "header">
          <img src={logo} className="App-logo" alt="logo" />
        </div> 
        <Menu changeBackground = {this.changeBackground}/> 
        <body>
          <Pages/>
          <div className = "gap">&nbsp;</div> 
          <Footer/>  
        </body>
        
      </div>
      </Router>
    );
  }
}


export default App;
