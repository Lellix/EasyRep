import React, { useState } from "react";
import './cards.css';

import {MdLocationPin} from 'react-icons/md';
import {IoMaleFemale} from 'react-icons/io5';
import {IoFemale} from 'react-icons/io5';
import {IoMale} from 'react-icons/io5';

const Cards = (props) =>{ 

    const TipoIcons = ()=>{
        if(props.tipo == 'fem'){
            return <IoFemale size={30}/>
        } else if(props.tipo == 'masc'){
            return <IoMale size={30}/>
        } else {
            return <IoMaleFemale size={30}/>
        }
    }

    const Tipo = ()=>{
        if(props.tipo == 'fem'){
            return 'Feminina'
        } else if(props.tipo == 'masc'){
            return 'Masculina'
        } else {
            return 'Mista'
        }
    }

    return(
        <>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src={props.imagem}/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{props.nome}</p>
                                </div>
                            </div>

                            <div class="media mb-1">
                                <div class="media-left">
                                    <h3 className="iconCard1"><MdLocationPin size={30}/></h3>
                                </div>

                                <div class="content">
                                    Rua {props.rua}, n° {props.numero}
                                    <br/>Bairro {props.bairro} - {props.estado} 
                                </div>
                            </div>

                            <div className="mt-5 is-flex is-align-items-center">
                                <div className="cardInfo is-flex is-flex-grow-1 is-flex-direction-column is-align-items-center">
                                    <h3 className="iconCard2">{TipoIcons()}</h3>
                                    <h1>{Tipo()}</h1>
                                </div>

                                <div class="cardInfo is-flex is-flex-grow-1 is-flex-direction-column is-align-items-center">
                                    <h1 className="asciiIcons">{props.moradores}</h1>
                                    <h1>Moradores</h1>
                                </div>

                                <div class="cardInfo is-flex is-flex-grow-1 is-flex-direction-column is-align-items-center">
                                    <h1 className="asciiIcons">{props.rep == 'r' ? 'R' : 'P'}</h1>
                                    <h1>{props.rep == 'r' ? 'República' : 'Pensão'}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Cards;