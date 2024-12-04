import React, { useState, useEffect } from 'react'; // On importe React et deux hooks: useState pour gérer l'état et useEffect pour exécuter du code au chargement.
import "./AppartementsGrid.css"; // On importe le fichier CSS pour les styles de la grille des appartements.
import Appartment from "./Appartment.jsx"; // On importe le composant Appartment pour afficher chaque appartement.

function AppartmentsGrid() {
const [appartements, setAppartements] = useState([]); // On crée une variable 'appartements' pour stocker la liste d'appartements récupérée depuis l'API.

// useEffect permet de lancer la fonction 'fetchApartements' quand le composant est monté.
useEffect(() => {
fetchApartements();
}, []); // [] signifie que le code à l'intérieur de useEffect ne sera exécuté qu'une seule fois, au premier chargement de la page.

// Fonction pour récupérer la liste des appartements depuis le fichier db.json.
function fetchApartements() {
fetch("/src/data/db.json") // On envoie une requête pour récupérer le fichier db.json.
.then((res) => res.json()) // Une fois la réponse reçue, on la convertit en JSON.
.then((res) => setAppartements(res)) // On met à jour la liste des appartements avec les données récupérées.
.catch((err) => console.log(err)); // Si une erreur survient, on l'affiche dans la console.
}

// Affichage du composant.
return (
<div className="grid">
{/* On affiche chaque appartement dans un composant Appartment. */}
{appartements.map((appartment) => (
<Appartment
key={appartment.id} // On donne une clé unique à chaque appartement pour React.
title={appartment.title} // On passe le titre de l'appartement en prop.
imageUrl={appartment.cover} // On passe l'URL de l'image de l'appartement en prop.
id={appartment.id} // On passe l'id de l'appartement pour l'utiliser plus tard si nécessaire.
/>
))}
</div>
);
}

export default AppartmentsGrid; // On exporte le composant pour pouvoir l'utiliser ailleurs.
