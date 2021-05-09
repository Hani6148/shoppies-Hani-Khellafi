import React from 'react'
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <Logo />
            <SearchBar />
        </div >
    )
}

export default Header