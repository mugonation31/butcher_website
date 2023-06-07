import React from "react";
import "./Header.scss";
import left from "../../assets/images/left.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        {/* IMG's STARTS HERE  */}
        <div className="header__img">
          <div className="left"></div>

          <div className="right"></div>
        </div>
        {/* IMG's ENDS HERE  */}

        {/* HEADER TITLE STARTS HERE  */}
        <div className="header__title">
          <h2>
            Special Fresh Meat <b>For You</b>
          </h2>
          <p>
            Featuring 100% Grass-Fed Beef, Free-Range Organic Chicken, Pork
            Raised
          </p>
        </div>
        {/* HEADER TITLE ENDS HERE  */}
      </div>
    </header>
  );
}
