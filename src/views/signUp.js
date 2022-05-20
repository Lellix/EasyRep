import React from "react"
import "./home.css"

import Header from './header'
import Footer from './footer'
import HorizontalLinearStepper from '../components/stepper'

import './signUp.css'

const SignUp = () => {
    return(
        <>
            <Header/>

            <div className='conteudo is-flex is-justify-itens-center'>
                <HorizontalLinearStepper/>
            </div>

            <Footer/>
        </>
    )
}

export default SignUp

