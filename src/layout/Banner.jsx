import React from 'react'; // On importe React pour créer le composant.
import "./Banner.css"; // On importe le fichier CSS pour appliquer des styles à la bannière.

function Banner() {
return (
// La div principale qui contient la bannière.
<div className="banner">

{/* Titre affiché dans la bannière */}
<h1>Chez vous, partout et ailleurs</h1>
</div>
);
}

export default Banner; // On exporte le composant pour pouvoir l'utiliser ailleurs.
