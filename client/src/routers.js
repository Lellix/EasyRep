import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "./screen/Home";
import SignUp from './views/signUp';
import RepProfile from './views/repProfile';
import RepChangeProfile from './views/repChangeProfile';
import Rooms from "./views/rooms";
import RepBusca from "./views/repBusca";
import Search from "./views/search";


const App = () => {
   return(
      <div className="App">

         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/RepBusca" element={<RepBusca/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/RepProfile" element={<RepProfile/>} />
            <Route path="/RepChangeProfile" element={<RepChangeProfile/>} />
            <Route path="/Rooms" element={<Rooms/>} />
         </Routes>
      </div>
   )
}

export default App;