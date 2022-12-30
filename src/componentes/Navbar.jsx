import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
    <div className="navbar">
    <Link to='/'>home</Link>
    <Link to='/about'>about</Link>
    <Link to='/productos'>productos</Link>
    <Link to='/api'>api</Link>
    <Link to='/formulario'>formulario</Link>
    </div>
    )
}

export default Navbar
