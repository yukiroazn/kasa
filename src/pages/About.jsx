import React from 'react'
import "./About.css"

function About() {
return (
<div className='aboutusmainbody'>

<div className='aboutbannercontainer'>
<img className="aboutbanner" src="aboutbanner.jpg" alt="about" />
</div>

<div className='aboutcontainer'>

<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader'>
<span>Fiabilité</span>
<i className="fa-solid fa-chevron-up arrowup"></i>
</p>
<p className='aboutdescriptioncontent'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont
conformes aux logements, et toutes les informations sont régulièrement vérifiées
par nos équipes..
</p>
</div>

<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader'>
<span>Respect</span>
<i className="fa-solid fa-chevron-up arrowup"></i>
</p>
<p className='aboutdescriptioncontent'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
discrimination ou de pertubation du voisinage entraînera une exclusion de notre plateforme.
</p>
</div>

<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader'>
<span>Service</span>
<i className="fa-solid fa-chevron-up arrowup"></i>
</p>
<p className='aboutdescriptioncontent'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience
parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
</p>
</div>

<div className='aboutdescriptioncontainer'>
<p className='aboutdescriptionheader'>
<span>Securité</span>
<i className="fa-solid fa-chevron-up arrowup"></i>
</p>
<p className='aboutdescriptioncontent'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
chaque logement correspond aux critèrede sécurité établis par nos services. En laissant une note aussi bien à l'hôte
qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
organisons également des ateliers sur la sécurité domestique pour nos hôtes.
</p>
</div>

</div>

</div>

)
}

export default About