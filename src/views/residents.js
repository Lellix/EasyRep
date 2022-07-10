import React from "react"

import "./css/home.css"
import './css/repProfile.css'
import './css/rooms.css'
import './css/residents.css'

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"

import TableResidents from "../components/tableResidends"

const Residents = () => {
  
    return(
        <>
            <Header/>

            <nav className="navbar baloo2">

                <RepMenu/>
                <div className="is-flex is-flex-direction-column tableDiv">
                
                    <div className="is-flex is-flex-grow-1">
                        <TableResidents/>
                    </div>
        
                    <button className="button downloadPDF baloo2">Enviar Tabela</button>
                </div>
            </nav>

            <Footer/>
        </>
    )
}

export default Residents;