import React, { useState } from "react";

import "./css/home.css"
import './css/repProfile.css'
import './css/rooms.css'

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"
import TableChores from "../components/tableChores"

import DenseTable from "../components/table2";


const Chores = () => {

    const getElements= (rows) =>{
        setRows(rows);
    }

    const [rows, setRows] = useState([
        { id: 1, tarefa: "", periodo: ""},
    ]);

    return(
        <>
            <Header/>

            <nav className="navbar baloo2">

                <RepMenu/>
                
                <div className="is-flex is-flex-grow-1 is-flex-direction-column">
                    <TableChores  elements={getElements}/> {/* passar moradores por referência */}

                    <div className="mt-6 ml-6" style={{width: "80%"}}>
                       < DenseTable rows={rows}/>
                    </div>
                </div>
                
            </nav>

            <Footer/>
        </>
)
}

export default Chores;