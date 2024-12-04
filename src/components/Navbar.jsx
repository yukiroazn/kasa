import React from "react"; // On importe React pour pouvoir créer le composant.
import logo from "../assets/logo.png"; // On importe l'image du logo.
import "./Navbar.css"; // On importe le fichier CSS pour appliquer les styles de la navbar.
import { NavLink } from 'react-router-dom'; // On importe NavLink pour gérer les liens avec React Router.

function Navbar() {
return (
// La balise <nav> est utilisée pour définir la barre de navigation.
<nav className="navbar">

{/* Lien vers la page d'accueil */}
<NavLink to="/">
<div>
<img className="logo" src={logo} alt="logo" /> {/* Affiche le logo */}
</div>
</NavLink>

{/* Lien vers la page d'accueil */}
<NavLink to="/">
<div>Acceuil</div>
</NavLink>

{/* Lien vers la page "A propos" */}
<NavLink to="/about">
<div>A propos</div>
</NavLink>
</nav>
);
}

export default Navbar; // On exporte le composant pour pouvoir l'utiliser ailleurs.
