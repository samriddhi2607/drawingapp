import React, { Component } from 'react';
import "../AvatarOption/AvatarOption.css"

class AvatarOption extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="select-me">
                <img className="avatar-box" src="dolphin.gif" alt=""></img>
            </div>
        )
    }
}
 
export default AvatarOption;