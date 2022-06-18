import React from "react"
import "./css/home.css"
import './css/signUp.css'

import Header from './header'
import Footer from './footer'

const SignUpResident = () => {
    return(
        <>
            <Header/>

            <div className='mt-5 is-flex is-justify-content-center'>
                <div className="my-3">
                        <h1 className="has-text-weight-semibold">CADASTRO</h1>
                </div>

                {/* NOME */}
                <div className="field "> 
                    <div className="control">
                        <label>Nome</label>
                        <Field name="nome" className="input is-medium" type="text" placeholder="digite o nome da república"/>
                    </div>
                </div>

                {/* EMAIL */}
                <div className="field"> 
                    <div className="control">
                        <label>Email</label>
                        <Field name="email" className="input is-medium" type="email" placeholder="e-mail"/>
                    </div>
                </div>

                {/* SENHA */}
                <div className="is-flex is-flex-direction-row is-justify-content-center">
                    <div className="field is-flex-grow-1 mr-1"> 
                        <div className="control">
                            <label>Senha</label>
                            <Field name="senha" className="input is-medium" type="password" placeholder="senha"/>
                        </div>
                    </div>

                    <div className="field is-flex-grow-1 ml-1"> 
                        <div className="control ">
                            <label>Confirme a senha</label>
                            <Field name="senha2" className="input is-medium" type="password" placeholder="confirme a senha"/>
                        </div>
                    </div>
                </div>

                {/* INPUT FOTO */}
                <div className="file is-light is-medium mt-2">
                    <label className="file-label">  
                        <input className="file-input" type="file" name="resume"/>
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">
                                Selecione uma foto…
                            </span>
                        </span>
                    </label>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default SignUpResident

