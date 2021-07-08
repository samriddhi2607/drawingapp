import React, { Component } from 'react';
import "../AvatarOption/AvatarOption.css"

class AvatarOption extends Component 
{
    state = { 
        currAvatar: 0,
        avatars: ["dolphin.gif", "elephant.gif","horse.gif","kangaroo.gif","monkey.gif", "owl.gif", "panda.webp", "pig.gif", "rat.gif", "sloth.gif", "spider.gif", "unicorn.gif"],

     }



     leftClick= () => {
        let curr = this.state.currAvatar;
           if(curr > 0){
            curr = curr-1;
           }else{
            curr = curr + 11;
           }

           this.setState({

               currAvatar : curr

           });

        }



        rightClick= () => {

            let curr = this.state.currAvatar;

            curr = (curr+1)%12;

            this.setState({

                currAvatar : curr

            });

         }
    
    render() { 
        return ( 
            <div className="select-me">
                <div className="arrow left" onClick={()=> this.leftClick()} >
                <i className="fas fa-chevron-left"></i>
               </div>
                <img className="avatar-box" src={this.state.avatars[this.state.currAvatar]} alt=""></img>
               <div className="arrow right" onClick={()=> this.rightClick()}>
               <i className="fas fa-chevron-right"></i>
               </div>
            </div>
            
        )
    }
}
 
export default AvatarOption;