import React from "react"
import "./modal.js"
import "./login.css"
import { Link } from 'react-router-dom';


const SingUpModal = (props) => {

    return(
        <>
            <div id="signup" className="modal">
                <div className="modal-background"></div>

                <div className="modal-content baloo2">
                    <div className="box">
                        <div className="is-flex is-justify-content-end">
                            <button className="delete" aria-label="close" onClick={props.open} ></button>
                        </div>
                        <div className="is-flex is-flex-direction-row is-justify-content-center mt-1
                        3mb-5"
                             style={{color: "#6E2594"}}>

                                <p className="has-text-weight-bold">Selecione o tipo de cadastro</p>
                        </div>
                    
                        <div className="is-flex is-justify-content-center is-flex-direction-column">
                            <Link to="/SignUp">
                                <button className="button is-white baloo2 has-text-weight-bold buttonEntrar mt-3"  
                                        style={{background: "#fec601", color: "#4e4e4e"}}>
                                            REPÚBLICA  
                                </button>
                            </Link>
                        </div> 

                        <div className="is-flex is-justify-content-center is-flex-direction-column">
                            <Link to="/SignUpResident">
                                <button className="button is-white baloo2 has-text-weight-bold buttonEntrar mt-3"  
                                        style={{background: "#fec601", color: "#4e4e4e"}}>
                                            INQUILINO  
                                </button>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingUpModal

