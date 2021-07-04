import React, { Component } from 'react';
import "../Avatar/Avatar.css"

class Avatar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="avatarparent">
            <img className="avatar" src="dolphin.gif" alt=""></img>
            <img className="avatar" src="elephant.gif" alt=""></img>
            <img className="avatar" src="horse.gif" alt=""></img>
            <img className="avatar" src="kangaroo.gif" alt=""></img>
            <img className="avatar" src="monkey.gif" alt=""></img>
            <img className="avatar" src="owl.gif" alt=""></img>
            <img className="avatar" src="panda.webp" alt=""></img>
            <img className="avatar" src="pig.gif" alt=""></img>
            <img className="avatar" src="rat.gif" alt=""></img>
            <img className="avatar" src="sloth.gif" alt=""></img>
            <img className="avatar" src="spider.gif" alt=""></img>
            <img className="avatar" src="unicorn.gif" alt=""></img>
           
       </div>
         );
    }
}
 
export default Avatar;