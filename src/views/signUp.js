import React from "react"
import "./home.css"

import Header from './header'
import Footer from './footer'



const SignUp = () => {
    return(
        <>
            <Header/>

            <nav className="is-flex is-justify-content-center baloo2">
                <div className="is-flex is-justify-content-end">
                    <button className="delete" aria-label="close"></button>
                </div>
                <div className="is-flex is-flex-direction-row is-justify-content-center mt-1 3mb-5"
                     style={{color: "#6E2594"}}>
                                <p className="has-text-weight-bold">CADASTRAR REPÚBLICA</p>
                        </div>
                    
                        <div class="field">
                            <p class="control">
                                <input class="input" type="name" placeholder="digite o nome da república"/>
                                <input class="input" type="email" placeholder="e-mail"/>
                            </p>
                        </div>

                        <div class="field">
                            <p class="control is-flex is-flex-direction-row is-justify-content-center">
                                <input class="input" type="password" placeholder="senha"/>
                                <input class="input" type="password" placeholder="confirme a senha"/>
                            </p>
                        </div>

                        <div class="field is-flex is-flex-direction-row is-justify-content-center">
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

                            <div class="control">
                                <div class="select">
                                    <select class="regime">
                                        <option>Regime</option>
                                        <option>Tradicional</option>
                                        <option>Não Tradicional</option>
                                        <option>Pensão</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="file">
                            <label class="file-label">
                                <input class="file-input" type="file" name="resume"/>
                                <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Selecione uma foto…
                                </span>
                                </span>
                            </label>
                        </div>

                        <div className="control is-flex is-justify-content-center is-flex-direction-column">
                            <button className="button is-white baloo2 has-text-weight-bold buttonEntrar mt-3"  
                                    style={{background: "#fec601", color: "#4e4e4e"}}>
                                        CADASTRAR  
                            </button>
                        </div> 
            </nav>

            <Footer/>
        </>
    )
}

export default SignUp

