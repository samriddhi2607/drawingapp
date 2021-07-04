import React, { Component } from 'react';
import Heading from "../Heading/Heading";
import Avatar from"../Avatar/Avatar";
import "../Header/Header.css"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
                <Heading></Heading>
                <Avatar></Avatar>
            </div>
                
            

         );
    }
}
 
export default Header;