import React from "react";
import "./Socials.scss";
import facebook from "../../assets/images/facebook.png";
import tinder from "../../assets/images/tinder.png";
import microsoft from "../../assets/images/microsoft.png";
import airbnb from "../../assets/images/airbnb.png";
import hubspot from "../../assets/images/hubspot.png";

export default function Socials() {
  return (
    <div className="socials">
      <div className="logos">
        <img src={facebook} alt="" />
        <img src={tinder} alt="" />
        <img src={microsoft} alt="" />
        <img src={airbnb} alt="" />
        <img src={hubspot} alt="" />
      </div>
    </div>
  );
}
