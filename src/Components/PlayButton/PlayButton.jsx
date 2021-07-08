import React, { Component } from 'react';
import "../PlayButton/PlayButton.css";
import {Link} from "react-router-dom";

class PlayButton extends Component {
    state = {  }
    render() { 
        return ( <div className="click">
            <div className="playlink">
                <Link to = "/play" className="clickme"> Play</Link>
            </div>
        </div>);
    }
}
 
export default PlayButton;