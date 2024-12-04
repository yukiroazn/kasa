import React from 'react'; // On importe React pour pouvoir utiliser JSX et des composants React
import { createRoot } from 'react-dom/client'; // On importe createRoot pour créer et gérer notre racine React
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // On importe ces fonctions pour gérer les routes de l'application
import Homepage from '../pages/Homepage'; // On importe la page d'accueil
import AppartementPage from '../pages/AppartementPage'; // On importe la page d'un appartement spécifique
import Footer from '../layout/Footer'; // On importe le pied de page (footer)
import Navbar from '../components/Navbar'; // On importe la barre de navigation
import About from '../pages/About'; // On importe la page "À propos"
import ErrorPage from '../pages/ErrrorPage'; // On importe la page d'erreur (si la route n'est pas trouvée)

const router = createBrowserRouter([ // On crée un routeur qui contient plusieurs routes

// Route pour la page d'accueil
{ 
path: '/', // L'URL racine (la page d'accueil)
element: <Homepage />, // Le composant à afficher pour cette route
errorElement: ( // Si un problème survient (page non trouvée, erreur, etc.)
<>
<Navbar /> {/* Affiche la barre de navigation */}
<ErrorPage/> {/* Affiche la page d'erreur */}
</>
), 
},

// Route pour une page d'appartement spécifique (avec un ID dans l'URL)
{ 
path: '/flat/:id', // URL avec un paramètre "id" pour l'appartement
element: ( // Le contenu à afficher pour cette route
<>
<Navbar /> {/* Affiche la barre de navigation */}
<AppartementPage/> {/* Affiche la page de l'appartement spécifique */}
<Footer /> {/* Affiche le pied de page */}
</>
),
},

// Route pour la page "À propos"
{ 
path: '/about', // URL pour la page "À propos"
element: ( // Le contenu à afficher pour cette route
<>
<Navbar /> {/* Affiche la barre de navigation */}
<About/> {/* Affiche la page "À propos" */}
<Footer /> {/* Affiche le pied de page */}
</>
),
},

]);

// Crée la racine de l'application et la rend dans l'élément avec l'ID 'root' du HTML
createRoot(document.getElementById('root')).render(
<React.StrictMode> {/* Mode strict qui aide à trouver des erreurs pendant le développement */}
<RouterProvider router={router} /> {/* Fournit le routeur à l'application */}
</React.StrictMode>
);
