import React from "react"
import "./home.css"

import Header from './header'
import Footer from './footer'
import './repProfile.css'
import RepMenu from "../components/menuRep"



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

                <div className="baloo2 conteudo">
                    <div className="card debug">
                        <div className="card-content is-flex-direction-column is-align-content-center">
                            <div className="media is-flex is-justify-content-center">
                                <figure className="image is-128x128">
                                    <img className= "is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"/>
                                </figure>
                            </div>

                            <div className="content is-flex-direction-column is-justify-content-center">
                                <p className="title is-4">República Xeruléu</p>
                                <div className=" is-flex-direction-row is-justify-content-center">
                                    <button className="button"> Editar Perfil </button>
                                    <button className="button"> Notificações </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

            <Footer/>
        </>
    )
}

export default RepProfile;