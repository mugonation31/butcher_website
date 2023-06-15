import React from "react";
import "./Recent.scss";
import beef from "../../assets/images/beef.png";

export default function Recent() {
  return (
    <section className="products">
      <div className="products__head">
        <span>RECENT PRODUCTS</span>
        <h2>Recent Products</h2>
        <p className="ipsum">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy
        </p>
      </div>

      <div className="products__purchase">
        <div className="buy">
          <img src={beef} alt="" />

          <div className="info">
            <span>BEEF FOR NUTRITIONS</span>
            <h1>Beef 1 Kg Pack</h1>
            <p>
              Flowbase is the largest webflow resource site, with. Flowbase is
              the best{" "}
            </p>
            <button>Add To Cart $12</button>
          </div>
        </div>
        <div className="buy">
          <img src={beef} alt="" />

          <div className="info">
            <span>BEEF FOR NUTRITIONS</span>
            <h1>Beef 1 Kg Pack</h1>
            <p>
              Flowbase is the largest webflow resource site, with. Flowbase is
              the best{" "}
            </p>
            <button>Add To Cart $12</button>
          </div>
        </div>
        <div className="buy">
          <img src={beef} alt="" />

          <div className="info">
            <span>BEEF FOR NUTRITIONS</span>
            <h1>Beef 1 Kg Pack</h1>
            <p>
              Flowbase is the largest webflow resource site, with. Flowbase is
              the best{" "}
            </p>
            <button>Add To Cart $12</button>
          </div>
        </div>
        <div className="buy">
          <img src={beef} alt="" />

          <div className="info">
            <span>BEEF FOR NUTRITIONS</span>
            <h1>Beef 1 Kg Pack</h1>
            <p>
              Flowbase is the largest webflow resource site, with. Flowbase is
              the best{" "}
            </p>
            <button>Add To Cart $12</button>
          </div>
        </div>
      </div>
    </section>
  );
}
