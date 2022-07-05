import React from "react"
import { PDFExport } from '@progress/kendo-react-pdf';

import "./css/home.css"
import './css/repProfile.css'
import './css/rooms.css'

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"

import TableResidents from "../components/tableResidends"

const exportPDF = () => {
    this.resume.save();
}

const Residents = () => {
  
    return(
        <>
            <Header/>

            <nav className="navbar baloo2">

                <RepMenu/>
                <div className="is-flex is-flex-direction-column">

                <PDFExport paperSize={'Letter'}
                    fileName="_____.pdf"
                    title=""
                    subject=""
                    keywords=""
                    ref={(r) => this.resume = r}>
                        <div style={{
                            height: 792,
                            width: 612,
                            padding: 'none',
                            backgroundColor: 'white',
                            boxShadow: '5px 5px 5px black',
                            margin: 'auto',
                            overflowX: 'hidden',
                            overflowY: 'hidden'}}>
                                <div className="is-flex is-flex-grow-1">
                                    <TableResidents/>
                                </div>
                        </div>
                    </PDFExport>
        
                    <button onClick={exportPDF}>download</button>
                </div>
            </nav>

            <Footer/>
        </>
    )
}

export default Residents;