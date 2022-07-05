import React from "react"
import "./../views/css/home.css"
import './../views/css/repProfile.css'

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
                        <a>Perfil</a>
                    </Link>
                </ul>
                <p className="menu-label">
                    Administração
                </p>
                <ul className="menu-list">
                    <Link to="/Residents">
                        <a>Moradores</a>
                    </Link>
                    <Link to="/Rooms">
                        <a>Gerenciar Vagas</a>
                    </Link>
                    <Link to="/">
                        <a>Visitas</a>
                    </Link>
                    <Link to="/Finances">
                        <a>Financeiro</a>
                    </Link>
                    <Link to="/Chores">
                        <a>Tarefas</a>
                    </Link>
                    <li><a>Excluir República</a></li>
                </ul>
            </aside>
        </>
    )
}

export default RepMenu;