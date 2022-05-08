import React from "react";
import "./home.css"
import Cards from './../components/cards'

const Rep = () =>{
    return(
        <>
            <nav className="is-flex is-justify-content-center baloo2">
                <div className="busca is-flex is-flex-direction-row">

                    <div class="field is-grouped">
                        <div class="cidade field">
                            <div class="control">
                                <input class="input" type="text" placeholder="Digite o nomde da cidade ou da república"/>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <div class="select">
                                    <select class="tipo">
                                        <option>Tipo</option>
                                        <option>Feminina</option>
                                        <option>Masculina</option>
                                        <option>Mista</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="control">
                            <button class="buscar button is-link" style={{background: "#6E2594", color: "#F6F6F6"}}>Submit</button>
                        </div>

                    </div>
                </div>
            </nav>

            <Cards/>
        </>
    )
}

export default Rep