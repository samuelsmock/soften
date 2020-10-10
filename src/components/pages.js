import React from 'react';

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import Me from './me';
import Bodywork from './bodywork';
import Care from './care';
import Art from './art';


class Pages extends React.Component {
    render (){
        return(
          
           <div className = "pages">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/me" />
                    </Route>
                    <Route path = "/me" component ={Me} />
                    <Route path = "/bodywork" component = {Bodywork} />
                    <Route path = "/care" component = {Care} />
                    <Route path = "/art" component = {Art} />
                </Switch>
            </div> 
                  
        )
    }
          

}

export default Pages;