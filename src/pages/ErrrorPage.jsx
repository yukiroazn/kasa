import React from 'react'
import "./ErrorPage.css"
import { Link } from 'react-router-dom'

function ErrrorPage() {
return (
<>
<div className='mainbodyforofor'>
<h1 className='forofor'>404</h1>
<h2 className='subtitleforofor'>Oups! La page que vous demandez n'existe pas.</h2>
<div className='container'>
<Link className='retour' to="/">Retour à la page d'accueil</Link>
</div>
</div>
</>
)
}

export default ErrrorPage