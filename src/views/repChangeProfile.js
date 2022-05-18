import React from "react"
import "./home.css"

import Header from './header'
import Footer from './footer'
import './repProfile.css'
import { Link } from 'react-router-dom';



const RepProfile = () => {
    return(
        <>
            <Header/>
            
            <nav className="navbar baloo2">

                {/* <RepMenu/> */}
                <aside className="menu">
                    <p className="menu-label">
                        Geral
                    </p>
                    <ul className="menu-list">
                        <li><a>Perfil</a></li>
                    </ul>
                    <p className="menu-label">
                        Administração
                    </p>
                    <ul className="menu-list">
                        <li><a>Moradores</a></li>
                        <li><a>Modificar Vagas</a></li>
                        <li>
                            <a className="menu-list">Visitas</a>
                            <ul>
                                <li><a>Calendário</a></li>
                                <li><a>Mensagens</a></li>
                            </ul>
                        </li>
                        <li><a>Financeiro</a></li>
                        <li><a>Tarefas</a></li>
                    </ul>
                </aside>
                {/* ------------------------------------- */}

               
            </nav>

            <Footer/>
        </>
    )
}

export default RepProfile;