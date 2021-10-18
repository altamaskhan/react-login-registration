import React from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import './App.css';
import Header from './Header';
import Login from './Login';
import Singup from './Singup';
import Home from "./Home";
import Loginvalid from "./Loginvalid"
import Registration from "./Ragistration";


function App() {
  return (
   <>

   
   
   <Router>
   <Header/>
   


      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Singup}/>        
    
       
      </Switch>
  
    </Router>
   </>
  );
}

export default App;
