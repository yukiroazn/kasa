import React, { useState } from 'react';
import './About.css';

function About() {
const [isContentVisible, setIsContentVisible] = useState([false, false, false, false]);

const showContent = (index) => {setIsContentVisible(prevState => {
const newState = [...prevState];
newState[index] = !newState[index];

return newState;
});
};

return (
<div className='aboutusmainbody'>
<div className='aboutbannercontainer'>
<img className='aboutbanner' src='aboutbanner.jpg' alt='about' />
</div>

<div className='aboutcontainer'>

<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader' onClick={() => showContent(0)}>
<span>Fiabilité</span>
<i className={`fas fa-chevron-${isContentVisible[0] ? 'up' : 'down'} arrowup`}></i>
</p>
{isContentVisible[0] && (
<p className='aboutdescriptioncontent'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
)}
</div>

<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader' onClick={() => showContent(1)}>
<span>Respect</span>
<i className={`fas fa-chevron-${isContentVisible[1] ? 'up' : 'down'} arrowup`}></i>
</p>
{isContentVisible[1] && (
<p className='aboutdescriptioncontent'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement de discrimination ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
)}
</div>

<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader' onClick={() => showContent(2)}>
<span>Service</span>
<i className={`fas fa-chevron-${isContentVisible[2] ? 'up' : 'down'} arrowup`}></i>
</p>
{isContentVisible[2] && (
<p className='aboutdescriptioncontent'>
Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
)}
</div>

<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader' onClick={() => showContent(3)}>
<span>Sécurité</span>
<i className={`fas fa-chevron-${isContentVisible[3] ? 'up' : 'down'} arrowup`}></i>
</p>
{isContentVisible[3] && (
<p className='aboutdescriptioncontent'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
)}
</div>

</div>

</div>
);
}

export default About;
