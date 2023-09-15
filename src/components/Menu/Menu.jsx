import React from "react";

import "./menu.css"

const Menu = ({ color }) => {

    // console.log(color)

    return (

        <nav id="nav" style={{ backgroundColor: (color ? "cyan" : "blue") }}>

            {/* I'm nav here */}

            <ul>

                <li><a style={{ color: (color ? "red" : "yellow") }} href="">Home</a></li>
                <li><a style={{ color: (color ? "red" : "yellow") }} href="">Products</a></li>
                <li><a style={{ color: (color ? "red" : "yellow") }} href="">About</a></li>
                <li><a style={{ color: (color ? "red" : "yellow") }} href="">Cart</a></li>
                <li><a style={{ color: (color ? "red" : "yellow") }} href="">LogIn</a></li>
            </ul>
        </nav>
    )

}

export default Menu