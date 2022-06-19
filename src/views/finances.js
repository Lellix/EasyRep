import React from "react"
import "./css/home.css"
import './css/repProfile.css'
import './css/rooms.css'

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"
import TableDemo from "../components/tableFinances";

import { Link } from 'react-router-dom';
import TableResidents from "../components/tableResidends"

const Finances = () => {
    return(
        <>
            <Header/>

            <nav className="navbar baloo2">

                <RepMenu/>
                
                <div className="is-flex is-flex-grow-1">
                    <TableDemo/>
                </div>
                
            </nav>

            <Footer/>
        </>
)
}

export default Finances;