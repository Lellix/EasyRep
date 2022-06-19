import React from "react"
import "./css/home.css"
import './css/repProfile.css'
import './css/rooms.css'

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"
import TableChores from "../components/tableChores"

const Chores = () => {
    return(
        <>
            <Header/>

            <nav className="navbar baloo2">

                <RepMenu/>
                
                <div className="is-flex is-flex-grow-1">
                    <TableChores />
                </div>
                
            </nav>

            <Footer/>
        </>
)
}

export default Chores;