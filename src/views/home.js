import React from "react"
import "./home.css"


const Home = () => {
    return(
        <>
            <nav className="is-flex is-justify-content-center baloo2">
                <div className="homeCard px-6 is-flex is-flex-direction-row is-justify-content-center is-align-content-center">
                    <div className="pl-6 is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-center is-align-content-center">                       
                        <h2 className="is-size-5">Bem vindo ao <span className="has-text-weight-bold">EasyRep</span>!</h2>
                        <h1 className="has-text-weight-bold is-size-1 mb-4">BUSCANDO POR <br/>UMA REPÚBLICA?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="linha"/>
                    </div>
                    <div className="is-align-items-center is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-end mb-5">
                        <img className="img1" src={require("./../assets/img/EasyRep_PoltronaEstante.png")}></img>
                    </div>
                </div>
            </nav>

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
                                    <p class="title is-4">John Smith</p>
                                </div>
                            </div>

                            <div class="media mb-1">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                </div>

                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. 
                                </div>
                            </div>

                            <div class="media mt-3 sobre is-flex is-align-items-center">
                                <div class="icones is-align-items-center">
                                    <figure class="image is-48x48 is-align-items-center">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                    <label>Feminina</label>
                                </div>

                                <div class="icones is-align-items-center">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                    <label>Moradores</label>
                                </div>

                                <div class="icones is-align-content-center">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                    <label>República</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                </div>
                            </div>

                            <div class="media mb-1">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                </div>

                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. 
                                </div>
                            </div>

                            <div class="media mt-3 sobre is-flex is-align-items-center">
                                <div class="icones is-align-items-center">
                                    <figure class="image is-48x48 is-align-items-center">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                    <label>Feminina</label>
                                </div>

                                <div class="icones is-align-items-center">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                    <label>Moradores</label>
                                </div>

                                <div class="icones is-align-content-center">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                    <label>República</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                </div>
                            </div>

                            <div class="media mb-1">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                </div>

                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. 
                                </div>
                            </div>

                            <div class="media mt-3 sobre is-flex is-align-items-center">
                                <div class="icones is-align-items-center">
                                    <figure class="image is-48x48 is-align-items-center">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                    <label>Feminina</label>
                                </div>

                                <div class="icones is-align-items-center">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                    <label>Moradores</label>
                                </div>

                                <div class="icones is-align-content-center">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                    </figure>
                                    <label>República</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </nav>

            <nav className="is-flex is-justify-content-center baloo2">
                <div className="about px-6 is-flex is-flex-direction-row is-justify-content-center is-align-content-center">
                    <div className="pl-6 is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-center is-align-content-center">                       
                        <img className="img1" src={require("./../assets/img/EasyRep_PoltronaEstante.png")}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="is-align-items-center is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-end mb-5">
                        <img className="img1" src={require("./../assets/img/EasyRep_PoltronaEstante.png")}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="is-align-items-center is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-end mb-5">
                        <img className="img1" src={require("./../assets/img/EasyRep_PoltronaEstante.png")}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Home

