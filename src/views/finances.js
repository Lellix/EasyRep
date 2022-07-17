import React from "react"
import { useState } from "react";

import "./css/home.css"
import './css/repProfile.css'
import './css/rooms.css'

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"
import TableDemo from "../components/tableFinances";

import DenseTable from "../components/table";


const Finances = () => {

    const getElements= (rows) =>{
        setRows(rows);
    }

    const [rows, setRows] = useState([
        { id: 1, conta: "", valor: ""},
    ]);

    return(
        <>
            <Header/>

            <nav className="navbar baloo2">

                <RepMenu/>
                
                <div className="is-flex is-flex-grow-1 is-flex-direction-column">
                    <div className="mt-4 ml-6" style={{width: "100%"}}>
                        <TableDemo elements={getElements}/>
                    </div>

                    <div className="mt-6 ml-6" style={{width: "80%"}}>
                       < DenseTable rows={rows}/>
                    </div>

                    <button className="button downloadPDF baloo2 mt-5">Enviar Tabela</button>

                </div>

                <div>
                    
                </div>
                
            </nav>

            <Footer/>
        </>
)
}

export default Finances;