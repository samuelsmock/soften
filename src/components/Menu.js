import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


class Menu extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           items: [
                {
                    path: '/me',
                    text: "about me"
                },
                {
                    path: '/bodywork',
                    text: "bodywork"
                },
                {
                    path: '/care',
                    text: 'care'
                },
                {
                    path: '/art',
                    text: 'art'
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

        let elemToAdd = newList.splice(index, 1);
        newList.unshift(elemToAdd[0]);
        console.log(elemToAdd[0]);
        this.setState({items: newList});


    }


    render(){
        return (
        <div className = "menuBar">
            <ul>
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
                        <LinkContainer to={item.path}>
                            <Button>{item.text}</Button>
                        </LinkContainer>
                    </li>
                ))}
            </ul>
            
        </div>
        );
    }
}


export default withRouter(Menu);