import React from 'react'; // Import de React pour créer le composant.
import "./Main.css"; // Import des styles CSS spécifiques pour le composant Main.

// Définition du composant fonctionnel `Main`.
// Ce composant est un conteneur générique qui encapsule d'autres éléments (passés comme enfants).
function Main({ children }) {
return (
// La classe "main" est utilisée pour appliquer des styles CSS au conteneur.
<div className="main">
{/* Les enfants passés au composant Main seront rendus ici */}
{children}
</div>
);
}

export default Main; // Export du composant pour pouvoir l'utiliser dans d'autres fichiers.
