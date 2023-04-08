import React from 'react'
import "./AppartementBanner.css"

export function AppartementBanner(props) {
return (
<div className='appartementbannercontainer'>
<img className="appartementbanner" src={props.imageUrl} alt="apartement" />
</div>
)
}