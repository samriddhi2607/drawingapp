import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";

import "../CanvasBox/CanvasBox.css"

class CanvasBox extends Component {
    state = { 
        prevColor: "black",
        color: "black",
        brushRadius:"12",
     }

     setColor = () =>{
         this.setState({
             color:this.state.prevColor
         })
     }

     changeColor=(e)=>
     {
         this.setState(
             {
                 prevColor: this.state.color,
                 color:e
             }
         );
     }

     changeBrush=(e)=>
     {
        this.setState(
            {
                brushRadius:e
            }
        );
     }

     delete=()=>
     {
        this.saveableCanvas.clear();
     }

     undo=()=>
     {

        this.saveableCanvas.undo();
     }
    render() { 
        return (  
        
        <div className="canvasbox">
            <div className="wordguess">
               - - - - 
            </div>
              <CanvasDraw  ref={canvasDraw => (this.saveableCanvas = canvasDraw)} canvasWidth="65vw" canvasHeight ="82vh" hideGrid="true" brushColor={this.state.color} lazyRadius="0" brushRadius={this.state.brushRadius} color="red"></CanvasDraw>     
            <div className="options">
              <div className="palette">
                    <div className="pink" onClick={()=>this.changeColor("pink")}></div>
                    <div className="black"onClick={()=>this.changeColor("black")}></div>
                    <div className="blue"onClick={()=>this.changeColor("blue")}> </div>
                    <div className="red"onClick={()=>this.changeColor("red")}></div>
                    <div className="yellow"onClick={()=>this.changeColor("yellow")}></div>
                    <div className="purple"onClick={()=>this.changeColor("purple")}></div>
                    <div className="green"onClick={()=>this.changeColor("green")}></div>
                    <div className="brown"onClick={()=>this.changeColor("brown")}></div>
               </div>

               <div className="optionimg">
               <img className="op" src="brush.gif" alt="" onClick={() => this.setColor()}></img>
               <img className="op" src="eraser.webp" alt="" onClick={()=>this.changeColor("white")}></img>
               <img className="op" src="trashf.png" alt="" onClick={()=>this.delete()}></img>
               <img className="op" src="undof.png" alt="" onClick={()=>this.undo()}></img>
               </div>

               <div className="brush">
                   <div className="brush-one" onClick={()=>this.changeBrush("6")}></div>
                   <div className="brush-two" onClick={()=>this.changeBrush("15")}></div>
                   <div className="brush-three"onClick={()=>this.changeBrush("30")}></div>
               </div>

            </div>
        </div>

         );
    }
}
 
export default CanvasBox;
