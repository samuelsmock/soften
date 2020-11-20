import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import ReactDOM from "react-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import sky from "../../media/sky.png";
import canon from "../../media/canon.jpg";
import greySky from "../../media/grey_sky.jpg";
import beach from "../../media/beach.jpg";  
import driftwood from "../../media/driftwood.JPG";
import './Menu.css';

class Menu extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           items: [
                {
                    path: '/me',
                    id: 1,
                    text: "about me",
                    bgImg: `url(${sky})`
                },
                {
                    path: '/bodywork',
                    id: 2,
                    text: "bodywork",
                    bgImg: `url(${driftwood})`
                },
                {
                    path: '/care',
                    id: 3,
                    text: 'care',
                    bgImg: `url(${greySky})`
                },
                {
                    path: '/info',
                    id: 4,
                    text: 'info',
                    bgImg: `url(${beach})`
                }
            ]

        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {                    //reorders the list and changes the background image
        this.props.history.push(event);
        
        let clickItem = event.target.innerHTML;
        let newList = this.state.items;
        let index; 
        for(const elem of newList){
            if(elem.text === clickItem)
                {index = newList.indexOf(elem);}
        }
        
   
        document.body.style.backgroundImage = newList[index].bgImg;
        {this.props.changeBackground(newList[index].bgImg)};    //changes the state of the App component so new bgImg is kn own at the top level
        let elemToAdd = newList.splice(index, 1);
        newList.unshift(elemToAdd[0]);
        
        this.setState({items: newList});

        
        

    }


    render(){
        return (
            

            <div className = "menuBar">
                <TransitionGroup component= "ul">
                    {this.state.items.map(item => (
                        
                        <CSSTransition
                        
                        timeout={500}
                        classNames="fade"
                        key={item.id}
                      > 
                        <li
                            key={item.path}
                            onClick={this.handleClick}
                            className={
                                this.props.location.pathname === item.path
                                    ? 'menu_item_active'
                                    : 'menu_item'
                            }
                        >
                            <Link to={item.path}>{item.text}</Link>
                        </li>
                        </CSSTransition>

                    ))}
                </TransitionGroup>
            </div>
          
        );
    }
}


export default withRouter(Menu);