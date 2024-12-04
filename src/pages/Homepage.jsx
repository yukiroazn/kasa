import React from "react"; // Import de React pour créer le composant.
import Navbar from "../components/Navbar.jsx"; // Import du composant de navigation.
import Banner from "../layout/Banner.jsx"; // Import du composant de bannière.
import AppartmentsGrid from "../components/AppartmentsGrid.jsx"; // Import du composant d'affichage des appartements.
import Main from "../layout/Main.jsx"; // Import de la structure principale de la page.
import Footer from "../layout/Footer.jsx"; // Import du composant pied de page.
import "./Homepage.css"; // Import du fichier CSS pour styliser la page d'accueil.

// Définition du composant `Homepage`.
function Homepage() {
return (
<div>
{/* Barre de navigation en haut de la page */}
<Navbar />

{/* Section principale contenant la bannière et la grille d'appartements */}
<Main>
{/* Bannière de la page d'accueil */}
<Banner />

{/* Grille des appartements affichés sur la page */}
<AppartmentsGrid />
</Main>

{/* Pied de page */}
<Footer />
</div>
);
}

export default Homepage; // Export du composant pour l'utiliser ailleurs dans l'application.
