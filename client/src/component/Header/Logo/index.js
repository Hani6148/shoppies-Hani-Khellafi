import React from 'react'
import "./Logo.css"
import { Link } from "react-router-dom"
function Logo() {
    return (
        <Link className="linkToMain" to="/">
            <h1 className="logo">
                Shoppies
            <h6>Movie awards for entrepreneurs</h6>
            </h1>
        </Link>

    )
}


export default Logo