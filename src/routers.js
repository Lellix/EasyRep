import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./screen/Home";
import Login from './screen/login';
import SignUp from './views/signUp';


const App = () => {
   return(
      //  <SignUp/> 
      <div className="App">

         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/SignUp" element={<SignUp/>} />
         </Routes>
      </div>
   )
}

export default App;