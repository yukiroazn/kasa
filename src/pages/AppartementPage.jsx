import React, { useEffect } from 'react';
import "./AppartementPage.css";
import { AppartementDescription } from '../components/AppartementDescription';
import { AppartementBanner } from '../components/AppartementBanner';
import { AppartementHeader } from '../components/AppartementHeader';
import { useLocation } from "react-router-dom";

function AppartementPage() {
const location = useLocation();
const [flat, setFlat] = React.useState(null);

useEffect(fetchAppartmentData, []);

function fetchAppartmentData() {
fetch("db.json")
.then((res) => res.json())
.then((flats) => {
const flat = flats.find((flat) => flat.id === location.state.appartmentId);
setFlat(flat);
}).catch(console.error);
}

if (flat == null) return <div>Loading...</div>;
return (
<div className='appartementpage'>
<AppartementBanner imageUrl={flat.cover} />
<AppartementHeader flat={flat} /> 
<div className='appartementdescriptionflex'>
<AppartementDescription title="Description" content={flat.description} />
<AppartementDescription title="Equiments" content={flat.equipments.map((eq) => (
<li>{eq}</li>
))} />
</div>
</div>
);
}

export default AppartementPage;
