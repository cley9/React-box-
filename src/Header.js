import React from 'react'
import logo from "./images/acuator.jpg"
import "./header.css"
function Header() {
    return (
        <div className="header">
            <div className="header__menu">
                <a href="./contacto"> contacto</a>
                <a href="">
                    < img src={logo} alt="logo"></img>
                </a>

            </div>
        </div>
    )
}

export default Header
