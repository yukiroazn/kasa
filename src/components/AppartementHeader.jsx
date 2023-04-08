import React from 'react'
import "./AppartementHeader.css"

export function AppartementHeader({ flat }) {

const { name } = flat.host;
const [ firstName, lastName ] = name.split(" ");

return (
<div className='appartementheader'>

<div className='appartementpagetitle'>
<p className='titlename'>{flat.title}</p>
<p className='locationtext'>{flat.location}</p>
<div className='appartementtags'>
{flat.tags.map((tag) => (
<span className='appartementtag appartementtagtext' key={tag}>{tag}</span>
))}
</div>
</div>

<div className='appartementowner'>

<div className='appartementownerdetails'>
<h3>
<span>{firstName}</span>
<span>{lastName}</span>
</h3>
<div></div>
<img className='apppartementownerbadge'src={flat.host.picture} alt="" />
</div>

<div className='appartementownerstars'>
{[1, 2, 3, 4, 5].map((num) => (
<i key={num}className={`fas fa-star ${flat.rating >= num ? "starred" : ""}`}></i>
))}

</div>
</div>

</div>
)
}