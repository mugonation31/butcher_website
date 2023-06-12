import React from "react";
import "./Process.scss";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import choose from "../../assets/images/choose.png";
import quick from "../../assets/images/quick.png";
import doorstep from "../../assets/images/doorstep.png";
import arrow from "../../assets/images/arrow.png";

export default function Process() {
  return (
    <section className="process">
      {/*Header Starts here   */}
      <div className="process__header">
        <div className="text">
          <span>PROCESS</span>
          <h2>Our Quick Process</h2>
          <p>
            Simply the best brand for all your fresh meat delivery in industry.
          </p>
        </div>
      </div>
      {/*Header Ends here   */}

      <div className="process__steps">
        <img src={icon1} alt="" className="icon1" />
        <img src={icon2} alt="" className="icon2" />

        <div className="order">
          <div className="choose">
            <img src={choose} alt="" />
            <span>1. Choose Meat</span>
            <p>
              A simply brilliant dummy text of the printing and typesetting
              industry Lorem
            </p>
          </div>

          <img src={arrow} alt="" className="arrow" />

          <div className="quick">
            <img src={quick} alt="" />
            <span>2. Quick Order</span>
            <p>
              A simply brilliant dummy text of the printing and typesetting
              industry Lorem
            </p>
          </div>

          <img src={arrow} alt="" className="arrow" />

          <div className="doorstep">
            <img src={doorstep} alt="" />
            <span>3. Find Doorstep</span>
            <p>
              A simply brilliant dummy text of the printing and typesetting
              industry Lorem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
