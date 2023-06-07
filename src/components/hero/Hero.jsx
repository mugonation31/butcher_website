import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__inner">
        <div className="detail">
          <span className="since">FRESH MEAT SINCE 1997</span>
          <span className="headline">
            <h2>Get fresh meat in your doorstep</h2>
          </span>
          <span className="dummy">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy
          </span>

          <div className="hero__button">
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
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <span>4.9/5 - From 213 Reviews</span>
              <div className="logo1">
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div className="food">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <span>4.9/5 - From 213 Reviews</span>
            <div className="logo2">
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div className="hero__boxes">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}
