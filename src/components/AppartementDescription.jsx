import React from "react"
import "./AppartementDescription.css"

export function AppartementDescription(props) {
return (
<div className='appartementdescription'>
<p className='descriptionheader'>
<span>{ props.title }</span>
<i className="fa-solid fa-chevron-up arrowup"></i>
</p>
<p className='descriptioncontent'>{props.content}</p>
</div>
)
}