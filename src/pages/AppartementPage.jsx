import React, { useEffect, useState } from "react";
import "./AppartementPage.css";
import { AppartementDescription } from "../components/AppartementDescription";
import { AppartementBanner } from "../components/AppartementBanner";
import { AppartementHeader } from "../components/AppartementHeader";
import { useLocation } from "react-router-dom";

function AppartementPage() {
const location = useLocation();
const [flat, setFlat] = useState(null);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
fetchAppartmentData();
}, []);

function fetchAppartmentData() {
fetch("db.json")
.then((res) => res.json())
.then((flats) => {
const flat = flats.find(
(flat) => flat.id === location.state.appartmentId
);
setFlat(flat);
})
.catch(console.error);
}

function arrows(direction) {
setCurrentImageIndex((prevIndex) => {
if (direction === "previous") {
return prevIndex === 0 ? flat.pictures.length - 1 : prevIndex - 1;
} else {
return prevIndex === flat.pictures.length - 1 ? 0 : prevIndex + 1;
}
});
}

if (flat == null) return <div>Loading...</div>;

return (
<div className="appartementpage">
<AppartementBanner imageUrl={flat.pictures[currentImageIndex]} />
<AppartementHeader flat={flat} />
<div className="appartementdescriptionflex">
<AppartementDescription
title="Description"
content={flat.description}
/>

<AppartementDescription
title="Equiments"
content={flat.equipments.map((eq) => (
<li key={eq} style={{ listStyle: "none" }}>{eq}</li>
))}
/>
</div>

<div className="bannerarrows">
<i className="fa-solid fa-chevron-left"onClick={() => arrows("previous")}></i>
<span className="counter">{`${currentImageIndex + 1}/${flat.pictures.length}`}</span>
<i className="fa-solid fa-chevron-right"onClick={() => arrows("next")}></i>
</div>
</div>
);
}

export default AppartementPage;
