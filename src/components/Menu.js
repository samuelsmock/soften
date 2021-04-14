import React from 'react';
import FlipMove from 'react-flip-move';
import { Link, withRouter } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import sky from "../media/sky.png";
import canon from "../media/canon.jpg";
import greySky from "../media/grey_sky.jpg";
import beach from "../media/beach.jpg";  
import driftwood from "../media/driftwood_horizontal.jpg";
class Menu extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           items: [
                {
                    path: '/me',
                    text: "about me",
                    bgImg: `url(${sky})`
                },
                {
                    path: '/bodywork',
                    text: "bodywork",
                    bgImg: `url(${driftwood})`
                },
                {
                    path: '/care',
                    text: 'care',
                    bgImg: `url(${greySky})`
                },
                {
                    path: '/info',
                    text: 'info',
                    bgImg: `url(${beach})`
                }
            ]

        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.props.history.push(event);
        
        let clickItem = event.target.innerHTML;
        let newList = this.state.items;
        let index; 
        for(const elem of newList){
            if(elem.text === clickItem)
                {index = newList.indexOf(elem);}
        }
        
        /*
        document.body.style.backgroundImage = newList[index].bgImg;
        */
        let elemToAdd = newList.splice(index, 1);
        newList.unshift(elemToAdd[0]);
        
        this.setState({items: newList});

        
        

    }


    render(){
        return (
        

            <div className = "menuBar">
               
                <FlipMove duration = "1200ms" type = "ul" className = "menuOptions">  
                    {this.state.items.map(item => (
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
                    ))}
                </FlipMove>    
                
            </div>
          
        );
    }
}


export default withRouter(Menu);