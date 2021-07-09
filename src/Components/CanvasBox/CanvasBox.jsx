import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";

import "../CanvasBox/CanvasBox.css"

class CanvasBox extends Component {
    state = { 
        color: ["black" , "blue" , "yellow"],
        brushRadius:"12",
     }
    render() { 
        return (  
        
        <div className="canvasbox">
            <div className="wordguess">
               - - - - 
            </div>
              <CanvasDraw  canvasWidth="65vw" canvasHeight ="82vh" hideGrid="true" brushColor={this.state.color} lazyRadius="0" brushRadius={this.state.brushRadius} color="red"></CanvasDraw>     
                <div className="palette">
                </div>
        </div>

         );
    }
}
 
export default CanvasBox;
