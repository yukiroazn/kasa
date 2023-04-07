import React from 'react'
import "./AppartementHeader.css"

export function AppartementHeader() {
return (
<div className='appartementheader'>

<div className='appartementpagetitle'>
<p className='titlename'>Crazy loft on Canal Saint Martin</p>
<p className='locationtext'>Paris, Ile de France</p>
<div className='appartementtags'>
<div className='appartementtag appartementtagtext'>Cozy</div>
<div className='appartementtag appartementtagtext'>Canak</div>
<div className='appartementtag appartementtagtext'>Paris 10</div>
</div>
</div>

<div className='appartementowner'>

<div className='appartementownerdetails'>
<h3>
<span>Alexandre</span>
<span>Dumas</span>
</h3>
<div className='apppartementownerbadge'></div>
</div>

<div className='appartementownerstars'>
<i className="fa-sharp fa-solid fa-star starred"></i>
<i className="fa-sharp fa-solid fa-star starred"></i>
<i className="fa-sharp fa-solid fa-star starred"></i>
<i className="fa-sharp fa-solid fa-star stargray"></i>
<i className="fa-sharp fa-solid fa-star stargray"></i>
</div>
</div>

</div>
)
}