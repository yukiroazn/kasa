import React from 'react' // Importation de React pour utiliser des composants.
import "./ErrorPage.css" // Importation du fichier CSS pour styliser la page.
import { Link } from 'react-router-dom' // Importation de Link pour naviguer entre les pages avec React Router.

function ErrrorPage() {
return (
<>
{/* Conteneur principal de la page d'erreur */}
<div className='mainbodyforofor'>
{/* Affichage du code d'erreur 404 */}
<h1 className='forofor'>404</h1>

{/* Sous-titre expliquant l'erreur */}
<h2 className='subtitleforofor'>Oups! La page que vous demandez n'existe pas.</h2>

{/* Conteneur pour le lien de retour */}
<div className='container'>
{/* Lien pour revenir à la page d'accueil */}
<Link className='retour' to="/">Retour à la page d'accueil</Link>
</div>
</div>
</>
)
}

export default ErrrorPage // Exportation du composant pour pouvoir l'utiliser dans d'autres parties de l'application.
