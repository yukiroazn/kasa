import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
return (
<nav className="navbar">
<NavLink to="/"><div><img className="logo" src="logo.png" alt="logo"/></div></NavLink>
<NavLink to="/"><div>Acceuil</div></NavLink>
<NavLink to="/about"><div>A propos</div></NavLink>
</nav>
)
}

export default Navbar