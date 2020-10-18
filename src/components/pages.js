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
                <Switch>
                    <Route exact path="/" component = {Me} />
                    <Route exact path = "/me" component ={Me} />
                    <Route exact path = "/bodywork" component = {Bodywork} />
                    <Route exact path = "/care" component = {Care} />
                    <Route exact path = "/art" component = {Art} />
                </Switch>
            </div> 
                  
        )
    }
          

}

export default Pages;