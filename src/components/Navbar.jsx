import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
return (
<nav className="navbar">
<NavLink to="/"><div><img className="logo" src={logo} alt="logo"/></div></NavLink>
<NavLink to="/"><div>Acceuil</div></NavLink>
<NavLink to="/about"><div>A propos</div></NavLink>
</nav>
)
}

export default Navbar