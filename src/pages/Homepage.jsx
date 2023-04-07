import React from "react";
import Navbar from "../components/Navbar.jsx";
import Banner from "../layout/Banner.jsx";
import AppartmentsGrid from "../components/AppartmentsGrid.jsx";
import Main from "../layout/Main.jsx";
import Footer from "../layout/Footer.jsx";
import "./Homepage.css";

function Homepage() {
return (
<div>
<Navbar />
<Main>
<Banner />
<AppartmentsGrid />
</Main>
<Footer />
</div>
)
}

export default Homepage