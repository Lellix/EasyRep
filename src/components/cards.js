import React from "react";
import './cards.css';

import {MdLocationPin} from 'react-icons/md';
import {IoMaleFemale} from 'react-icons/io5';

const Cards = () =>{

    return(
        <>
            <nav className="is-flex is-justify-content-center baloo2">
                <div className="repCards px-6 is-flex is-flex-direction-row is-justify-content-center is-align-content-center">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">República Xeruléu</p>
                                </div>
                            </div>

                            <div class="media mb-1">
                                <div class="media-left">
                                    <h3 className="iconCard1"><MdLocationPin size={30}/></h3>
                                </div>

                                <div class="content">
                                    Rua Pererê Paraná, n° 666
                                    <br/>Bairro Na Nave - EC 
                                </div>
                            </div>

                            <div className="mt-5 is-flex is-align-items-center">
                                <div className="cardInfo is-flex is-flex-grow-1 is-flex-direction-column is-align-items-center">
                                    <h3 className="iconCard2"><IoMaleFemale size={30}/></h3>
                                    <h1>Mista</h1>
                                </div>

                                <div class="cardInfo is-flex is-flex-grow-1 is-flex-direction-column is-align-items-center">
                                    <h1 className="asciiIcons">5</h1>
                                    <h1>Moradores</h1>
                                </div>

                                <div class="cardInfo is-flex is-flex-grow-1 is-flex-direction-column is-align-items-center">
                                    <h1 className="asciiIcons">R</h1>
                                    <h1>República</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </nav>
        </>
    )
}

export default Cards;