import React, { Component } from 'react';
import Header from "../Header/Header"
import Box from "../Box/Box"
import "../FrontPage/FrontPage.css"

class FrontPage extends Component {
    state = {  }
    render() { 
        return (
            <div className="frontPage">
                <Header className="frontPageChild"></Header>
                <Box className="frontPageChild"></Box>
            </div>
                
            
            );
    }
}
 
export default FrontPage;