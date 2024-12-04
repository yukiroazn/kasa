import React, { useState } from 'react'; // On importe React et useState pour pouvoir créer un état et l'utiliser dans le composant
import './About.css'; // On importe le fichier CSS pour appliquer des styles au composant

function About() {
// useState est utilisé ici pour garder une trace de l'état de chaque section (si elle est ouverte ou fermée)
const [isContentVisible, setIsContentVisible] = useState([false, false, false, false]);

// Fonction qui change l'état pour afficher ou masquer chaque section
const showContent = (index) => {
setIsContentVisible(prevState => {
const newState = [...prevState]; // On copie l'état actuel
newState[index] = !newState[index]; // On inverse l'état de la section correspondante
return newState; // On retourne le nouvel état
});
};

return (
<div className='aboutusmainbody'> {/* Conteneur principal de la page à propos */}
<div className='aboutbannercontainer'>
<img className='aboutbanner' src='aboutbanner.jpg' alt='about' /> {/* Image principale de la page */}
</div>

<div className='aboutcontainer'> {/* Conteneur des sections à propos */}

{/* Première section : Fiabilité */}
<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader' onClick={() => showContent(0)}>
<span>Fiabilité</span>
<i className={`fas fa-chevron-${isContentVisible[0] ? 'up' : 'down'} arrowup`}></i>
</p>
{isContentVisible[0] && ( // Si la section est visible, on montre le texte
<p className='aboutdescriptioncontent'>
Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
</p>
)}
</div>

{/* Deuxième section : Respect */}
<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader' onClick={() => showContent(1)}>
<span>Respect</span>
<i className={`fas fa-chevron-${isContentVisible[1] ? 'up' : 'down'} arrowup`}></i>
</p>
{isContentVisible[1] && (
<p className='aboutdescriptioncontent'>
La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement de discrimination ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
</p>
)}
</div>

{/* Troisième section : Service */}
<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader' onClick={() => showContent(2)}>
<span>Service</span>
<i className={`fas fa-chevron-${isContentVisible[2] ? 'up' : 'down'} arrowup`}></i>
</p>
{isContentVisible[2] && (
<p className='aboutdescriptioncontent'>
Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
</p>
)}
</div>

{/* Quatrième section : Sécurité */}
<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader' onClick={() => showContent(3)}>
<span>Sécurité</span>
<i className={`fas fa-chevron-${isContentVisible[3] ? 'up' : 'down'} arrowup`}></i>
</p>
{isContentVisible[3] && (
<p className='aboutdescriptioncontent'>
La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
</p>
)}
</div>

</div>

</div>
);
}

export default About;
