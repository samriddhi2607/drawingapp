import React, { Component } from 'react';
import "../Heading/Heading.css";

class Heading extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="heading">
                <img className="logo" src="logo.gif" alt=""></img>
                </div>
                
            </React.Fragment>
            
         );
    }
}

export default Heading;