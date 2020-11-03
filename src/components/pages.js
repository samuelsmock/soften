import React from 'react';

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import Me from './me';
import Bodywork from './bodywork';
import Care from './care';
import Policies from './Policies';
import grapes from "../media/grapes.png";
import holding from "../media/holding.png";

class Pages extends React.Component {
    render (){
        return(
          
           <div className = "pages">
                <Switch>
                    
                    <Route exact path = "/">
                        <div className = "empty-space">
                            <img className = "doodle" src = {holding}/> 
                            <i className = "smallType"> "insert sentimental quote here" -  anonymous</i>
                        </div>
                    </Route>
                    <Route path = "/me" component ={Me} />
                    <Route path = "/bodywork" component = {Bodywork} />
                    <Route path = "/care" component = {Care} />
                    <Route path = "/art" component = {Policies} />

                   <div className = "empty-space"> </div>
                </Switch>
            </div> 
                  
        )
    }
          

}

export default Pages;