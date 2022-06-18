import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "./screen/Home";
import SignUp from './views/signUp';
import RepProfile from './views/repProfile';
import RepChangeProfile from './views/repChangeProfile';
import Rooms from "./views/rooms";
import EditRoom from "./views/editRoom";
import AddRoom from "./views/addRoom";
import Search from "./views/search"
import RepData from "./views/repData";
import SpareRooms from "./views/spareRooms"
import Room from "./views/room";
import RepBusca from "./views/repBusca";
import SingUpModal from "./components/signUpModal";



const App = () => {
   return(
      <div className="App">

         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/RepProfile" element={<RepProfile/>} />
            <Route path="/RepChangeProfile" element={<RepChangeProfile/>} />
            <Route path="/Rooms" element={<Rooms/>} />
            <Route path="/RepBusca" element={<RepBusca/>} />
            <Route path="/EditRoom" element={<EditRoom/>} />
            <Route path="/AddRoom" element={<AddRoom/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/RepData" element={<RepData/>} />
            <Route path="/SpareRooms" element={<SpareRooms/>} />
            <Route path="/Room" element={<Room/>} />
            <Route path="/SignUpModal" element={<SingUpModal/>} />

         </Routes>
      </div>
   )
}

export default App;