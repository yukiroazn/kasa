import React, { useEffect, useState } from "react"; // Import de React et des hooks useEffect et useState.
import "./AppartementPage.css"; // Import des styles spécifiques à la page appartement.
import { AppartementDescription } from "../components/AppartementDescription"; // Composant pour afficher une section de description.
import { AppartementBanner } from "../components/AppartementBanner"; // Composant pour afficher la bannière de l'appartement.
import { AppartementHeader } from "../components/AppartementHeader"; // Composant pour afficher les informations principales de l'appartement.
import { useParams } from "react-router-dom"; // Hook pour accéder aux paramètres de l'URL (id de l'appartement).

function AppartementPage() {
const { id } = useParams(); // Récupère l'id de l'appartement depuis l'URL.
const [flat, setFlat] = useState(null); // État pour stocker les données de l'appartement.
const [currentImageIndex, setCurrentImageIndex] = useState(0); // État pour gérer l'image actuellement affichée dans la bannière.

// Récupère les données de l'appartement à partir du fichier JSON au montage du composant.
useEffect(() => {
fetchAppartmentData();
}, []);

// Fonction pour charger les données de l'appartement depuis un fichier JSON.
function fetchAppartmentData() {
fetch("/src/data/db.json")
.then((res) => res.json()) // Convertit la réponse en JSON.
.then((flats) => {
const flat = flats.find((flat) => flat.id === id); // Trouve l'appartement correspondant à l'id.
setFlat(flat); // Met à jour l'état avec les données de l'appartement.
})
.catch(console.error); // Affiche une erreur en cas de problème lors de la récupération des données.
}

// Gère le changement d'image dans la bannière lorsque les flèches sont cliquées.
function arrows(direction) {
setCurrentImageIndex((prevIndex) => {
if (direction === "previous") {
// Si "précédent" est cliqué, passe à l'image précédente ou revient à la dernière image si c'est la première.
return prevIndex === 0 ? flat.pictures.length - 1 : prevIndex - 1;
} else {
// Si "suivant" est cliqué, passe à l'image suivante ou revient à la première image si c'est la dernière.
return prevIndex === flat.pictures.length - 1 ? 0 : prevIndex + 1;
}
});
}

// Affiche un message de chargement si les données de l'appartement ne sont pas encore disponibles.
if (flat == null) return <div>Loading...</div>;

// Structure de la page appartement.
return (
<div className="appartementpage">
{/* Bannière avec l'image actuelle */}
<AppartementBanner imageUrl={flat.pictures[currentImageIndex]} />

{/* En-tête avec les informations principales de l'appartement */}
<AppartementHeader flat={flat} />

{/* Section contenant la description et les équipements */}
<div className="appartementdescriptionflex">
{/* Description de l'appartement */}
<AppartementDescription title="Description" content={flat.description} />

{/* Liste des équipements */}
<AppartementDescription
title="Équipements"
content={flat.equipments.map((eq) => (
<li key={eq} style={{ listStyle: "none" }}>{eq}</li>
))}
/>
</div>

{/* Flèches de navigation et compteur pour la bannière */}
<div className="bannerarrows">
{/* Affiche les flèches et le compteur uniquement si l'appartement a plusieurs images */}
{flat.pictures.length > 1 && (
<>
<i className="fa-solid fa-chevron-left" onClick={() => arrows("previous")}></i>
<span className="counter">{`${currentImageIndex + 1}/${flat.pictures.length}`}</span>
<i className="fa-solid fa-chevron-right" onClick={() => arrows("next")}></i>
</>
)}
</div>
</div>
);
}

export default AppartementPage; // Export du composant pour l'utiliser ailleurs dans l'application.
