import React from "react"
import "./../views/home.css"
import './../views/repProfile.css'

const RepMenu = () => {
    return(
        <>
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
        </>
    )
}

export default RepMenu;