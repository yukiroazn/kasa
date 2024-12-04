import React, { useState } from "react"; // On importe React et la fonction useState pour gérer l'état
import "./AppartementDescription.css"; // On importe le fichier CSS pour styliser le composant

export function AppartementDescription(props) {
// On crée un état pour savoir si le contenu de la description est visible ou non
const [isContentVisible, setIsContentVisible] = useState(false);

// Fonction qui change la visibilité du contenu
const showContent = () => {
setIsContentVisible(!isContentVisible); // Inverse la visibilité (true/false)
};

return (
<div className='appartementdescription'> {/* Conteneur principal de la description */}

<p className='descriptionheader' onClick={showContent}> {/* Titre de la description, avec un événement de clic pour changer l'état */}
<span>{props.title}</span> {/* Le titre de la description, transmis en tant que prop */}
<i className={`fa-solid fa-chevron-${isContentVisible ? 'up' : 'down'} arrowup`}></i> {/* Icône de flèche qui change en fonction de la visibilité */}
</p>

{/* Si isContentVisible est true, on affiche le contenu de la description */}
{isContentVisible && (<p className='descriptioncontent'>{props.content}</p>)}

</div>
);
}
