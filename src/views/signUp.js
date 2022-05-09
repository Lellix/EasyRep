import React from "react"
import "./home.css"

import Header from './header'
import Footer from './footer'



const SignUp = () => {
    return(
        <>
            <Header/>

            <nav className="is-flex is-justify-content-center baloo2">
                <div className="is-flex is-flex-direction-row is-justify-content-center"
                     style={{color: "#6E2594"}}>
                                <p className="has-text-weight-bold">CADASTRAR REPÚBLICA</p>
                </div>

 {/* -------------------------------------------- GERAIS ---------------------------------------------- */}

                <div>
                    <h1>INFORMAÇÕES GERAIS</h1>
                </div>

                <div class="field"> 
                    <div class="control">
                        <input class="input" type="text" placeholder="digite o nome da república"/>
                    </div>
                </div>

                <div class="field"> 
                    <div class="control">
                        <input class="input" type="email" placeholder="e-mail"/>
                    </div>
                </div>

                <div class="is-flex is-flex-direction-row is-justify-content-center">
                    <div class="field"> 
                        <div class="control">
                            <input class="input" type="password" placeholder="senha"/>
                        </div>
                    </div>

                    <div class="field"> 
                        <div class="control">
                            <input class="input" type="password" placeholder="confirme a senha"/>
                        </div>
                    </div>
                </div>

                <div class="is-flex is-flex-direction-row is-justify-content-center">
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
                        
                    <div class="field">
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

 {/* -------------------------------------------- ENDEREÇO ---------------------------------------------- */}

                <div>
                    <h1>ENDEREÇO</h1>
                </div>

                <div class="is-flex is-flex-direction-row is-justify-content-center">
                    <div class="field"> 
                        <div class="control">
                            <input class="input is-flex is-grow-2" type="text" placeholder="endereço"/>
                        </div>
                    </div>

                    <div class="field"> 
                        <div class="control">
                            <input class="input is-flex is-grow-1" type="text" placeholder="número"/>
                        </div>
                    </div>
                </div>

                <div class="is-flex is-flex-direction-row is-justify-content-center">
                    <div class="field"> 
                        <div class="control">
                            <input class="input is-flex is-grow-1" type="text" placeholder="bairro"/>
                        </div>
                    </div>

                    <div class="field"> 
                        <div class="control">
                            <input class="input is-flex is-grow-1" type="text" placeholder="complemento"/>
                        </div>
                    </div>
                </div>

                <div class="is-flex is-flex-direction-row is-justify-content-center">
                    <div class="field"> 
                        <div class="control">
                            <input class="input is-flex is-grow-1" type="text" placeholder="cidade"/>
                        </div>
                    </div>

                    <div class="field"> 
                        <div class="control">
                            <input class="input is-flex is-grow-1" type="text" placeholder="cep"/>
                        </div>
                    </div>
                </div>


 {/* -------------------------------------------- OUTRAS ---------------------------------------------- */}
                
                <div>
                    <h1>OUTRAS INFORMAÇÕES</h1>
                </div>

                <div class="is-flex is-flex-direction-row is-justify-content-center">
                    <div class="field"> 
                        <div class="control">
                            <input class="input is-flex is-grow-1" type="text" placeholder="valor médio (contas/pessoa)"/>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <div class="select">
                                <select class="tipo">
                                    <option>política de limpeza</option>
                                    <option>Diarista</option>
                                    <option>Empregada</option>
                                    <option>Moradores</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="is-flex is-flex-direction-column is-justify-content-center">  
                    <div class="is-flex is-flex-direction-row is-justify-content-center">  
                        <div class="field">
                            <label>há acesso à cozinha?</label>
                            <div class="control">
                                <label class="radio">
                                <input type="radio" name="question"/>
                                Yes
                                </label>
                                <label class="radio">
                                <input type="radio" name="question"/>
                                No
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <label>há acesso à lavanderia?</label>
                            <div class="control">
                                <label class="radio">
                                <input type="radio" name="question"/>
                                Yes
                                </label>
                                <label class="radio">
                                <input type="radio" name="question"/>
                                No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="is-flex is-flex-direction-column is-justify-content-center">  
                    <div class="is-flex is-flex-direction-row is-justify-content-center">  
                        <div class="field">
                            <label>tem ou aceita pets?</label>
                            <div class="control">
                                <label class="radio">
                                <input type="radio" name="question"/>
                                Yes
                                </label>
                                <label class="radio">
                                <input type="radio" name="question"/>
                                No
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <label>possui garagem?</label>
                            <div class="control">
                                <label class="radio">
                                <input type="radio" name="question"/>
                                Yes
                                </label>
                                <label class="radio">
                                <input type="radio" name="question"/>
                                No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Footer/>
        </>
    )
}

export default SignUp

