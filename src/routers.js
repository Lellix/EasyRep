import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./screen/Home";
import Login from './screen/login';
import SignUp from './views/signUp';


const Routes = () => {
   return(
       <SignUp/>
    //    <BrowserRouter>
    //        <Route component = { Home }  path="/" exact={true}/>
    //        <Route component = { Login }  path="/login" />
    //    </BrowserRouter>
   )
}

export default Routes;