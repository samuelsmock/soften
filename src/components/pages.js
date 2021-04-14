import React from 'react';

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import Me from './me';
import Bodywork from './bodywork';
import Care from './care';
import Info from './Info';
import grapes from "../media/grapes.png";
import holding from "../media/holding.png";

class Pages extends React.Component {
    render (){
        return(
          
           <div className = "pages">
                <Switch>
                    
                    <Route exact path = "/">
                       
                            <div className ="grid-look">
                                <img className = "doodle" src = {holding}/> 
                                <i className = "smallType"> "Life doesn't make any sense without interdependence. We need each other, and the sooner we learn that, 
                                the better for us all" -  Eric Ericson</i>
                            </div>
                    
                    </Route>
                    <Route path = "/me" component ={Me} />
                    <Route path = "/bodywork" component = {Bodywork} />
                    <Route path = "/care" component = {Care} />
                    <Route path = "/info" component = {Info} />

                   <div className = "empty-space"> </div>
                </Switch>
            </div> 
                  
        )
    }
          

}

export default Pages;