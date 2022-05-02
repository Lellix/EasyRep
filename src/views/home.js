import React from "react"
import "./home.css"


const Home = () => {
    return(
        <>
            <nav className="is-flex is-justify-content-center">
                <div className="homeCard is-flex is-flex-direction-row is-justify-content-center is-align-content-center">
                    <div className="pl-6 baloo2 is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-center is-align-content-center">
                        <h2 className="is-size-5">Bem vindo ao <span className="has-text-weight-bold">EasyRep</span>!</h2>
                        <h1 className="has-text-weight-bold is-size-2">BUSCANDO POR <br/>UMA REPÚBLICA?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-center is-align-content-center">
                        <img src="assets/img/home.jpg"></img>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Home

