import React from 'react'; // On importe React pour pouvoir utiliser ses fonctionnalités
import "./AppartementBanner.css"; // On importe le fichier CSS pour appliquer des styles à ce composant

export function AppartementBanner(props) {
return (
<div className='appartementbannercontainer'> {/* Conteneur principal de la bannière */}
<img className="appartementbanner" src={props.imageUrl} alt="apartement" /> {/* Image de la bannière */}
</div>
)
}
