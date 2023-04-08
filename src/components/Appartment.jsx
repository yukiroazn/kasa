import React from 'react'
import { Link } from 'react-router-dom';
import "./Appartment.css"

function Appartment(props) {

return (
<div className="appartment">
<Link to="/flat" state={{appartmentId:props.id}}>
<img className="appartementimg" src={props.imageUrl} alt={props.title} />
<div className="appartementsubtitle">{props.title}</div>
</Link>
</div>
)
}

export default Appartment;
