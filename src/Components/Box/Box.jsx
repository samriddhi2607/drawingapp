import React, { Component } from 'react';
import NameOption from "../NameOption/NameOption"
import AvatarOption from "../AvatarOption/AvatarOption"
import PlayButton from "../PlayButton/PlayButton"
import "../Box/Box.css"


class Box extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="box">
                <NameOption></NameOption>
                <AvatarOption></AvatarOption>
                <PlayButton></PlayButton>
            </div>
                
         );
    }
}
 
export default Box;