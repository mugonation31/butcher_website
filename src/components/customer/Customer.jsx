import React from "react";
import "./Customer.scss";
import gouch from "../../assets/images/gouch.png";
import star1 from "../../assets/images/star1.png";
import star2 from "../../assets/images/star2.png";
import star3 from "../../assets/images/star3.png";
import star4 from "../../assets/images/star4.png";
import star5 from "../../assets/images/star5.png";
import back from "../../assets/images/back.png";
import forward from "../../assets/images/forward.png";
import green from "../../assets/images/green.png";
import mcguire from "../../assets/images/mcguire.png";
import floyd from "../../assets/images/floyd.png";
import quote from "../../assets/images/quote.png";

export default function Customer() {
  return (
    <section className="customer">
      <div className="customer__feedback">
        <div className="picture">
          <img src={gouch} alt="" className="gouch" />
          <img src={quote} alt="" className="quote" />
        </div>
        <div className="testimonial">
          <div className="rating">
            <img src={star1} alt="" />
            <img src={star2} alt="" />
            <img src={star3} alt="" />
            <img src={star4} alt="" />
            <img src={star5} alt="" />
          </div>
          <p className="word">
            It was a pleasure to work with Daniele on the Housebiz project (Real
            Estate). We helped the Housebiz team to design the Web
          </p>

          <div className="scroll">
            <div className="who">
              <span className="name">JOHN MACKNEY</span>
              <span className="title">Co Founder Of SISKO</span>
            </div>

            <div className="buttons">
              <img src={back} alt="" />
              <img src={forward} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="customer__more">
        <img src={green} alt="" />
        <img src={mcguire} alt="" />
        <img src={floyd} alt="" />
      </div>
    </section>
  );
}
