import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const items = [
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
];

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.props.history.push(event);
    }

    render(){
        return (
        <div className = "menuBar">
            <ul>
                {items.map(item => (
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
        );
    }
}


export default withRouter(Menu);