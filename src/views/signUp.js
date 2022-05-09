import React from "react"
import "./home.css"

import Header from './header'
import Footer from './footer'
import './signUp.css'

const SignUp = () => {
    return(
        <>
            <Header/>

            <nav className="baloo2 nav is-flex is-justify-content-center">
                <div className="conteudo is-flex is-justify-content-center is-align-content-center is-flex-direction-column">
                    
                    <div className="is-flex is-justify-content-center mt-5"
                        style={{color: "#6E2594"}}>
                                    <p className="has-text-weight-bold">CADASTRAR REPÚBLICA</p>
                    </div>

    {/* -------------------------------------------- GERAIS ---------------------------------------------- */}
                    <div className="mt-5">
                        <div className="my-3">
                            <h1 className="has-text-weight-semibold">INFORMAÇÕES GERAIS</h1>
                        </div>

                        <div className="field "> 
                            <div class="control">
                                <input class="input is-medium" type="text" placeholder="digite o nome da república"/>
                            </div>
                        </div>

                        <div className="field"> 
                            <div class="control">
                                <input class="input is-medium" type="email" placeholder="e-mail"/>
                            </div>
                        </div>

                        <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <div class="field is-flex-grow-1 mr-1"> 
                                <div class="control">
                                    <input class="input is-medium" type="password" placeholder="senha"/>
                                </div>
                            </div>

                            <div class="field is-flex-grow-1 ml-1"> 
                                <div class="control ">
                                    <input class="input is-medium" type="password" placeholder="confirme a senha"/>
                                </div>
                            </div>
                        </div>

                        <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <div class="field">
                                <div class="control">
                                    <div class="select is-medium">
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
                                            <div class="select is-medium">
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

                        <div className="file is-light is-medium mt-2">
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
                    </div>
                    
    {/* -------------------------------------------- ENDEREÇO ---------------------------------------------- */}

                    <div className="mt-5">
                        <div className="my-3">
                            <h1 className="has-text-weight-semibold">ENDEREÇO</h1>
                        </div>
                    </div>

                    <div class="is-flex is-flex-direction-row is-justify-content-center">
                        <div class="field is-flex-grow-5"> 
                            <div class="control">
                                <input class="input is-medium mr-1" type="text" placeholder="endereço"/>
                            </div>
                        </div>

                        <div class="field is-flex-grow-1"> 
                            <div class="control">
                                <input class="input is-medium ml-1" type="text" placeholder="número"/>
                            </div>
                        </div>
                    </div>

                    <div class="is-flex is-flex-direction-row is-justify-content-center">
                        <div class="field is-flex-grow-1"> 
                            <div class="control">
                                <input class="input is-medium mr-1" type="text" placeholder="bairro"/>
                            </div>
                        </div>

                        <div class="field is-flex-grow-1"> 
                            <div class="control">
                                <input class="input is-medium ml-1" type="text" placeholder="complemento"/>
                            </div>
                        </div>
                    </div>

                    <div class="is-flex is-flex-direction-row is-justify-content-center">
                        <div class="field is-flex-grow-1"> 
                            <div class="control">
                                <input class="input is-medium mr-1" type="text" placeholder="cidade"/>
                            </div>
                        </div>

                        <div class="field is-flex-grow-1"> 
                            <div class="control">
                                <input class="input is-medium ml-1" type="text" placeholder="cep"/>
                            </div>
                        </div>
                    </div>


    {/* -------------------------------------------- OUTRAS ---------------------------------------------- */}
                    
                    <div className="mt-5">
                        <div className="my-3">
                            <h1 className="has-text-weight-semibold">OUTRAS INFORMAÇÕES</h1>
                        </div>
                    </div>

                    <div class="is-flex is-flex-direction-row is-justify-content-center">
                        <div class="field is-flex-grow-1"> 
                            <div class="control">
                                <input class="input is-medium mr-1" type="text" placeholder="valor médio (contas/pessoa)"/>
                            </div>
                        </div>

                        <div class="field is-flex-grow-1">
                            <div class="control">
                                <div class="select is-medium ml-1">
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

                    <div class="is-flex is-flex-direction-row">  
                        <div class="is-flex is-flex-direction-column is-flex-grow-1">  
                            <div class="field is-flex-grow-1">
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

                            <div class="field is-flex-grow-1">
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

                        <div class="is-flex is-flex-direction-column is-flex-grow-1 ml-3">  
                            <div class="field is-flex-grow-1">
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

                            <div class="field is-flex-grow-1">
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

                
                    <div className="control is-flex is-justify-content-center is-flex-direction-column">
                        <button className="button is-white baloo2 has-text-weight-bold buttonEntrar mt-3"  
                                style={{background: "#fec601", color: "#4e4e4e"}}>
                                    CADASTRAR  
                        </button>
                    </div> 
                </div>
            </nav>

            <Footer/>
        </>
    )
}

export default SignUp

