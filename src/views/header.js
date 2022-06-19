import React from "react"
import "./css/header.css"

import "./../components/modal"
import Login from "./../components/login"
import SingUpModal from "./../components/signUpModal"
import { Link } from 'react-router-dom';

const Header = () => {
    const closeAndOpenModal =() =>{
        document.querySelector('.modal').classList.toggle('is-active');
    }

    return(

        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <Link to="/">
                            <h1 className = "baloobhaijaan logo has-text-weight-bold is-size-3 pl-5 mt-2">EASY<span>REP</span></h1> 
                        </Link>
                           
                    </div>
                </div>

                <div className="navbar-end pr-5">
                    <div className="navbar-item baloo2">
                        <button onClick={closeAndOpenModal}
                                className="button js-modal-trigger is-white baloo2 has-text-weight-bold"  
                                data-bs-target="signup" style={{color: "#4E4E4E"}}>
                                    CADASTRE-SE
                        </button>
                    </div>

                    <div className="linhaVertical mt-2"/>

                    <div className="navbar-item">
                        <button onClick={closeAndOpenModal}
                                className="button js-modal-trigger is-white baloo2 has-text-weight-bold buttonLogin"  
                                data-bs-target="login" 
                                style={{background: "#fec601", color: "#F6F6F6"}}>
                                    LOGIN 
                        </button>
                    </div> 
                </div>
                
            </nav>

            <div className="is-flex is-justify-content-center">
                <div className="linhaHorizontal mt-2"/>
            </div>

            <Login open={closeAndOpenModal}/>
            {/* <SingUpModal open={closeAndOpenModal}/> */}

        </>

    )
}

export default Header