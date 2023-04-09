import React, { useState, useEffect } from 'react';
import "./AppartementsGrid.css";
import Appartment from "./Appartment.jsx";

function AppartmentsGrid() {
const [appartements, setAppartements] = useState([]);

useEffect(() => {
fetchApartements();}, []);

function fetchApartements() {
fetch("/src/data/db.json")
.then((res) => res.json())
.then((res) => setAppartements(res))
.catch((err) => console.log(err));
}

return (
<div className="grid">
{appartements.map((appartment) => (
<Appartment key={appartment.id} title={appartment.title} imageUrl={appartment.cover} id={appartment.id} />
))}
</div>
);
}

export default AppartmentsGrid;
