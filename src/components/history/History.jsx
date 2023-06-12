import React from "react";
import "./History.scss";
import rectangle from "../../assets/images/rectangle.png";
import diamond from "../../assets/images/diamond.png";

export default function History() {
  return (
    <section className="history">
      <img src={rectangle} alt="" className="rectangle" />
      <img src={diamond} alt="" className="diamond" />
      <div className="history__wrap">
        <div className="about">
          <div className="established">
            <h1>Meat Delivery Company Since 1997</h1>
          </div>

          <div className="story">
            <span>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy. Simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy.
            </span>
          </div>
        </div>
      </div>

      <div className="history__container">
        <div className="video">
          <iframe
            width="1200"
            height="720"
            src="https://www.youtube.com/embed/cJcaa-Fb1Z8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
