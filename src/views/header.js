import React from "react"
import "./header.css"
import "./../components/modal"
import Login from "./../components/login"

const Header = () => {
    return(

        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <h1 className = "baloobhaijaan logo has-text-weight-bold is-size-3 pl-5 mt-2">EASY<span>REP</span></h1>    
                    </a>
                </div>

                <div className="navbar-end pr-5">
                    <a className="navbar-item baloo2">
                        <h2 className="has-text-weight-medium" style={{color: "#4E4E4E"}}>CADASTRE-SE</h2>
                    </a>

                    <div className="linhaVertical mt-2"/>

                    <div className="navbar-item">
                        <button className="button js-modal-trigger is-white baloo2 has-text-weight-bold buttonLogin"  
                                data-bs-target="modal-js-example" 
                                style={{background: "#fec601", color: "#F6F6F6"}}>
                                    LOGIN </button>
                    </div> 
                </div>
                
            </nav>

            <div className="is-flex is-justify-content-center">
                <div className="linhaHorizontal mt-2"/>
            </div>

            <Login/>

        </>

    )
}

export default Header