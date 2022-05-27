import React from "react"
import "./home.css"

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"
import './repProfile.css'
import { Link } from 'react-router-dom';
import Axios from "axios";


const RepProfile = () => {
    const handleRep = (values) =>{
        Axios.get("http://localhost:3001/RepProfile",{
        }, this.state).then((response) => {
            this.setState({ nome: response.data.nome})
            console.alert(response.data.msg);
            const nome = response.data.nome;
          });
    };

    /*const { nome } = this.state;*/
    
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
                                <p className="title is-4">República Um Nome Muito Grande</p>
                                <div className=" is-flex-direction-row is-justify-content-center">
                                    <Link to="/RepChangeProfile">
                                        <button className="button buttonn"> Editar Perfil </button>
                                    </Link>
                                    <button className="button buttonn"> Notificações </button>
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