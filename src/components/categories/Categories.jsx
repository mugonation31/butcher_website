import React from "react";
import "./Categories.scss";
import beef1 from "../../assets/images/beef1.png";
import chicken from "../../assets/images/chicken.png";
import lamb1 from "../../assets/images/lamb1.png";

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__wrap">
        <div className="header">
          <span>CATEGORIES</span>
          <h2>Popular Categories</h2>
          <p className="lorem">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy
          </p>
        </div>

        <div className="categories__meats">
          <div className="beef">
            <img src={beef1} alt="" />
            <h1>Beef</h1>
          </div>

          <div className="chicken">
            <img src={chicken} alt="" />
            <h1>Chicken</h1>
            <button>
              See All
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
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>

          <div className="lamb">
            <img src={lamb1} alt="" />
            <h1>Lamb</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
