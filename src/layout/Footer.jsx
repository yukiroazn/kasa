import React from 'react';
import "./Footer.css";
import logo from "../assets/logowhite.png";

function Footer() {
return (
<div className="footer">
<div className="footerlogo">
<img src={logo} alt="logo" width="100"/>
</div>
<div className="footertext">© 2020 Kasa. All right reserved</div>
</div>
);
}

export default Footer;
