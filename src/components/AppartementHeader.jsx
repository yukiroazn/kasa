import React from 'react'; // Permet d'utiliser React pour créer des composants.
import "./AppartementHeader.css"; // On importe le fichier CSS pour appliquer les styles au composant.

export function AppartementHeader({ flat }) {
// On déstructure "flat" pour obtenir les informations nécessaires comme le nom de l'hôte, le titre, etc.
const { name } = flat.host; // On extrait le nom de l'hôte.
const [firstName, lastName] = name.split(" "); // On divise le nom en prénom et nom de famille.

return (
<div className='appartementheader'> {/* C'est le conteneur principal pour l'en-tête de l'appartement */}

<div className='appartementpagetitle'> {/* Section qui affiche le titre de l'appartement */}
<p className='titlename'>{flat.title}</p> {/* Le titre de l'appartement */}
<p className='locationtext'>{flat.location}</p> {/* La localisation de l'appartement */}
<div className='appartementtags'> {/* Section pour afficher les tags associés à l'appartement */}
{flat.tags.map((tag) => ( // On parcourt tous les tags et on les affiche
<span className='appartementtag appartementtagtext' key={tag}>{tag}</span> // Affiche chaque tag
))}
</div>
</div>

<div className='appartementowner'> {/* Section qui affiche les informations de l'hôte */}

<div className='appartementownerdetails'> {/* Détails sur l'hôte */}
<h3>
<span>{firstName}</span> {/* Prénom de l'hôte */}
<span>{lastName}</span> {/* Nom de famille de l'hôte */}
</h3>
<div></div>
<img className='apppartementownerbadge' src={flat.host.picture} alt="" /> {/* Image de l'hôte */}
</div>

<div className='appartementownerstars'> {/* Section qui affiche les étoiles de l'hôte */}
{[1, 2, 3, 4, 5].map((num) => ( // On crée une boucle pour afficher 5 étoiles
<i key={num} className={`fas fa-star ${flat.rating >= num ? "starred" : ""}`}></i> // Si l'appartement a une note égale ou supérieure à "num", on ajoute une classe "starred" pour colorer l'étoile.
))}
</div>
</div>

</div>
);
}
