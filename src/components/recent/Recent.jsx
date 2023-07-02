import React from "react";
import "./Recent.scss";
import bp1 from "../../assets/images/bp1.png";
import bp2 from "../../assets/images/bp2.png";
import bp3 from "../../assets/images/bp3.png";
import bp4 from "../../assets/images/bp4.png";

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
          <img src={bp1} alt="" />

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
          <img src={bp2} alt="" />

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
          <img src={bp3} alt="" />

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
          <img src={bp4} alt="" />

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
