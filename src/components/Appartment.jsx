import React from 'react'; // On importe React pour pouvoir utiliser les fonctionnalités de React.
import { Link } from 'react-router-dom'; // On importe 'Link' de react-router-dom pour créer des liens de navigation entre les pages.
import "./Appartment.css"; // On importe le fichier CSS pour appliquer les styles du composant.

function Appartment(props) {
return (
<div className="appartment"> {/* C'est l'élément qui représente un appartement dans la grille */}
<Link to={`/flat/${props.id}`} state={{ appartmentId: props.id }}> {/* Le lien vers la page de détail de l'appartement */}
{/* Quand l'utilisateur clique sur cet appartement, il sera redirigé vers la page avec l'ID de l'appartement dans l'URL */}
<img className="appartementimg" src={props.imageUrl} alt={props.title} /> {/* Affiche l'image de l'appartement */}
<div className="appartementsubtitle">{props.title}</div> {/* Affiche le titre de l'appartement */}
</Link>
</div>
);
}

export default Appartment; // On exporte le composant pour pouvoir l'utiliser dans d'autres fichiers.
