import React from "react";
import "./Hero.scss";
import star1 from "../../assets/images/star1.png";
import star2 from "../../assets/images/star2.png";
import star3 from "../../assets/images/star3.png";
import star4 from "../../assets/images/star4.png";
import star5 from "../../assets/images/star5.png";
import Capterra from "../../assets/images/Capterra.png";
import Food from "../../assets/images/Food.png";
import Steak from "../../assets/images/Steak.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__inner">
        <div className="detail">
          <div className="since">FRESH MEAT SINCE 1997</div>
          <span className="headline">
            <h2>Get fresh meat in your doorstep</h2>
          </span>
          <p className="dummy">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy
          </p>

          <div className="button">
            See Our Collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="reviews">
            <div className="capterra">
              <div className="stars">
                <img src={star1} alt="" />
                <img src={star2} alt="" />
                <img src={star3} alt="" />
                <img src={star4} alt="" />
                <img src={star5} alt="" />
              </div>
              <span>4.9/5 - From 213 Reviews</span>
            </div>

            <div className="food">
              <div className="stars">
                <img src={star1} alt="" />
                <img src={star2} alt="" />
                <img src={star3} alt="" />
                <img src={star4} alt="" />
                <img src={star5} alt="" />
              </div>
              <span>4.9/5 - From 213 Reviews</span>
            </div>

            <div className="logos">
              <div className="logo1">
                <img src={Capterra} alt="" />
              </div>

              <div className="logo2">
                <img src={Food} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero__steak">
          <img src={Steak} alt="" />
        </div>
      </div>
    </div>
  );
}
