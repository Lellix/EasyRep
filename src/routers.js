import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./screen/Home";
import Login from './screen/login';
import SignUp from './views/signUp';


const App = () => {
   return(
      //  <SignUp/>
      <BrowserRouter>
         <Routes>
            <Route component = { Home }  path="/" exact={true}/>
         </Routes>
      </BrowserRouter>
   )
}

export default App;