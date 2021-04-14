import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import greySky from "../media/grey_sky.jpg";
import beach from "../media/beach.jpg";  
import horizon from "../media/blue_horizon.jpg";
import logo from '../media/soften_ibm.png';
import './App.css';
import Menu from './Menu.js';
import Pages from './pages.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Footer from "./footer.js";
import DropDown from "./DropDown/DropDown.js"

class App extends React.Component {
  componentDidMount(){
    /*
    document.body.style.backgroundImage = `url(${horizon})`
    */
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
      <Router basename= ''>
         
         <Parallax pages={2} scrolling={true} horizontal ={false} ref={ref => (this.parallax = ref)}>
          <ParallaxLayer factor = {2} offset={0} speed={0.5}>
            <img src = {horizon} ></img>
          </ParallaxLayer>
          <ParallaxLayer factor = {1} offset={0} speed={4}>
          <div className = 'dropDown'><DropDown/></div>
          <div className="App" >
            
            <div className = "header">
              <img src={logo} className="App-logo" alt="logo" />
            </div> 
            <Menu/> 
            <body>
              <Pages/>
              <div className = "gap"></div> 
              <Footer/>  
            </body>   
          </div>
          </ParallaxLayer>
          </Parallax>  
      </Router>
    );
  }
}


export default App;
