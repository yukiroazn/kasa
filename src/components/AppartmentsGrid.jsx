import React, { useState, useEffect } from 'react';
import "./AppartementsGrid.css";
import Appartment from "./Appartment.jsx";

function AppartmentsGrid() {
const [appartements, setAppartements] = useState([]);

useEffect(() => {
fetchApartements();}, []);

function fetchApartements() {
fetch("db.json")
.then((res) => res.json())
.then((res) => setAppartements(res))
.catch((err) => console.log(err));
}

return (
<div className="grid">
{appartements.map((appartment) => (
<Appartment title={appartment.title} imageUrl={appartment.cover}/>
))}
</div>
);
}

export default AppartmentsGrid;
