import React from 'react'; // On importe React pour créer le composant.
import "./Footer.css"; // On importe le fichier CSS qui contient les styles pour le footer.
import logo from "../assets/logowhite.png"; // On importe l'image du logo en blanc.

function Footer() {
return (
// La div principale qui contient tout le contenu du footer.
<div className="footer">

{/* Section pour afficher le logo */}
<div className="footerlogo">
<img src={logo} alt="logo" width="100" /> {/* Image du logo avec une largeur de 100px */}
</div>

{/* Texte en bas de la page */}
<div className="footertext">© 2020 Kasa. All right reserved</div>
</div>
);
}

export default Footer; // On exporte le composant pour pouvoir l'utiliser ailleurs.
