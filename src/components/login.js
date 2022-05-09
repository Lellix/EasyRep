import React from "react"
import "./modal.js"
import "./login.css"


const Login = (props) => {

    
    return(
        <>
            <div id="modal-js-example" className="modal">
                <div className="modal-background"></div>

                <div className="modal-content baloo2">
                    <div className="box">
                        <div className="is-flex is-justify-content-end">
                            <button className="delete" aria-label="close" onClick={props.open} ></button>
                        </div>
                        <div className="is-flex is-flex-direction-row is-justify-content-center mt-1
                        3mb-5"
                             style={{color: "#6E2594"}}>

                                <p className="has-text-weight-bold">LOGIN</p>
                        </div>
                    
                        <div class="field">
                            <p class="control">
                                <input class="input" type="email" placeholder="Email"/>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <input class="input" type="password" placeholder="Password"/>
                            </p>
                        </div>
                        <div className="is-flex is-justify-content-center is-flex-direction-column">
                            <button className="button is-white baloo2 has-text-weight-bold buttonEntrar mt-3"  
                                    style={{background: "#fec601", color: "#4e4e4e"}}>
                                        ENTRAR  
                            </button>
                            <a className="navbar-item baloo2 is-justify-content-end">
                                <h2 className="" style={{color: "#4E4E4E"}}>esqueci minha senha</h2>
                            </a>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

