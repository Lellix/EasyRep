import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { format, formatDistance, formatRelative, subDays } from 'date-fns'

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

    const [startDate, setStartDate] = useState(new Date());

    return(
        <>
            <Header/>

            <nav className="navbar baloo2">

                <RepMenu/>
                
                <div className="is-flex is-flex-grow-1 is-flex-direction-column">

                    <div className="mt-4 ml-6" style={{width: "100%"}}>
                        <TableChores  elements={getElements}/> {/* passar moradores por referência */}
                    </div>
                    
                    <div className="ml-6">
                        <br/>
                        <h2>Selecione a data de início</h2>
                        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                    </div>

                    <div className="mt-6 ml-6" style={{width: "80%"}}>
                       < DenseTable rows={rows}
                                    day={startDate.getDate()}
                                    month={startDate.getMonth()+1}/>
                    </div>

                    <button className="button downloadPDF baloo2 mt-5">Enviar Tabelas</button>
                </div>
                
            </nav>

            <Footer/>
        </>
)
}

export default Chores;