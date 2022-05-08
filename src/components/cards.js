import React from "react";

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
        </>
    )
}

export default Cards;