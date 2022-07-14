import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mailto:mukalachris05@gmail.com" style={{textDecoration:"none", color:"white"}}><span style={{fontWeight:"bold", fontFamily:"cursive"}}>mukalachris05@gmail.com</span></a>
        <div className="f-icons">
         <a href="https://www.instagram.com/accounts/login/?next=/mukiza_alain/"><Insta color="white" size={"3rem"} /></a>
         <a href="https://web.facebook.com/mukiza.ronaldo?_rdc=1&_rdr"> <Facebook color="white" size={"3rem"} /></a>
         <a href="https://github.com/mac-199902"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
