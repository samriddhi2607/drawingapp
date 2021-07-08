import React, { Component } from 'react';
import PlayerBox from "../PlayerBox/PlayerBox";
import CanvasBox from "../CanvasBox/CanvasBox";
import ChatBox from "../ChatBox/ChatBox";
import "../PlayPage/PlayPage.css";



class PlayPage extends Component {
    state = {  }
    render() { 
        return ( <div className="playpage">
                 <PlayerBox></PlayerBox>
               <CanvasBox></CanvasBox>
                <ChatBox></ChatBox>
                </div>
             );
    }
}
 
export default PlayPage ;