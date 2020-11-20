import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import sky from "../../media/sky.png";
import canon from "../../media/canon.jpg";
import greySky from "../../media/grey_sky.jpg";
import beach from "../../media/beach.jpg";  
import driftwood from "../../media/driftwood.JPG";
import dropdown from "../../media/dropdown.png";
import "./DropDown.css"

class DropDown extends React.Component{
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
        this.showMenu = this.showMenu.bind(this);
        
    }
    
    handleClick(event) {
        this.props.history.push(event);
        
        //reorder the list of menu options and change the background image
        let clickItem = event.target.innerHTML;
        let newList = this.state.items;
        let index; 
        
        for(const elem of newList){
            if(elem.text === clickItem)
                {index = newList.indexOf(elem);}
        }
        document.body.style.backgroundImage = newList[index].bgImg;

        let elemToAdd = newList.splice(index, 1);
        newList.unshift(elemToAdd[0]);
        
        this.setState({items: newList});

       
        //this code block closes the menu after selecting an option
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
            
          
        

    }

    showMenu(event){
        document.getElementById("myDropdown").classList.toggle("show");
        
    }

    

    render(){
        return (


           
                <div className="dropdown">
                    <button onClick={this.showMenu} className="dropbtn"><img src ={dropdown}height = "30px"></img></button>
                        <div id="myDropdown" className="dropdown-content">
                        <ul className ="dropdown-menu">
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
                        </ul>
                        </div>
                </div>
               
            
          
        );
    }
}


export default withRouter(DropDown);