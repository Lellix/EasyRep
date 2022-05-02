import React from "react"
import "./header.css"

const Header = () => {
    return(

        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <h1 className = "baloobhaijaan logo has-text-weight-bold is-size-4 pl-5 mt-2">EASY<span>REP</span></h1>    
                    </a>
                </div>

                <div className="navbar-end pr-5">
                    <a className="navbar-item baloo2">
                        <h2 className="has-text-weight-medium" style={{color: "#4E4E4E"}}>CADASTRE-SE</h2>
                    </a>

                    <div className="linhaVertical mt-2"/>

                    <div className="navbar-item">
                        <button className="button baloo2 has-text-weight-bold buttonLogin" style={{background: "#fec601", color: "#F6F6F6"}}>LOGIN</button>
                    </div>
                </div>
                
            </nav>

            <div className="is-flex is-justify-content-center">
                <div className="linhaHorizontal mt-2"/>
            </div>

        </>

    )
}

export default Header