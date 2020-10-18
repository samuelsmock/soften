import React from 'react';

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {Navbar} from "react-bootstrap";
import Me from './me';
import Bodywork from './bodywork';
import Care from './care';
import Art from './art';


class Pages extends React.Component {
    render (){
        return(
          
           <div className = "pages">
                
                    <Route exact path="/" component = {Me} />
                    <Route path = "/me" component ={Me} />
                    <Route path = "/bodywork" component = {Bodywork} />
                    <Route path = "/care" component = {Care} />
                    <Route path = "/art" component = {Art} />
                
            </div> 
                  
        )
    }
          

}

export default Pages;