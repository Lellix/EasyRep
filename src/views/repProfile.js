import React from "react"
import "./css/home.css"

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"
import './css/repProfile.css'

import { Link } from 'react-router-dom';



const RepProfile = () => {
    return(
        <>
            <Header/>
            
            <nav className="navbar baloo2">

                <RepMenu/>

                <div className="baloo2 conteudoo">
                    <div className="card profile">
                        <div className="card-content is-flex-direction-column is-align-content-center">
                            <div className="media is-flex is-justify-content-center">
                                <figure className="image is-128x128">
                                    <img className= "is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"/>
                                </figure>
                            </div>

                            <div className="content is-flex-direction-column is-justify-content-center">
                                <p className="title is-5">República Um Nome Muito Grande</p>
                                <div className=" is-flex is-justify-content-center is-aling-content-center">
                                    <Link to="/RepChangeProfile">
                                        <button className="button "> Editar Perfil </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="agenda">
                        
                    </div>

                </div>
            </nav>

            <Footer/>
        </>
    )
}

export default RepProfile;