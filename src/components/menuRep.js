import React from "react"
import "./../views/home.css"
import './../views/repProfile.css'

import { Link } from 'react-router-dom';


const RepMenu = () => {
    return(
        <>
            <aside className="menu">
                <p className="menu-label">
                    Geral
                </p>
                <ul className="menu-list">
                    <Link to="/RepProfile">
                        <li><a>Perfil</a></li>
                    </Link>
                </ul>
                <p className="menu-label">
                    Administração
                </p>
                <ul className="menu-list">
                    <li><a>Moradores</a></li>
                    <Link to="/Rooms">
                        <li><a>Gerenciar Vagas</a></li>
                    </Link>
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
        </>
    )
}

export default RepMenu;