import React, { Component } from 'react';
import FrontPage from "./Components/FrontPage/FrontPage";
import PlayPage from "./Components/PlayPage/PlayPage.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {  }
  render() { 
    return ( 
    <Router>
      <div className="App">
    
       <Switch>
         <Route path ="/" exact >
         <FrontPage></FrontPage>
         </Route>
         <Route path="/play" exact>
           <PlayPage></PlayPage>
         </Route>
       </Switch>
       </div>
    </Router>
     );
  }
}
 
export default App;
