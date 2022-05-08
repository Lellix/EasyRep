import React from "react";

const About = () =>{
    return(
        <>
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

export default About;