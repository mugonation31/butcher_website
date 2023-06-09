import React from "react";
import "./Nav.scss";
import user from "../../assets/images/user.svg";
import heart from "../../assets/images/heart.svg";
import shopping from "../../assets/images/shopping-bag.svg";
import hamburger from "../../assets/images/hamburger.png";
import Logo from "../../assets/images/Logo.png";

export default function Nav() {
  return (
    <nav className="nav">
      <input type="checkbox" class="nav__toggle" id="hamburger" hidden />

      <label for="hamburger" className="hamburger">
        <img src={hamburger} alt="" />
      </label>

      {/* lOGO START HERE */}
      <div className="nav__logo">
        {/* <span className="name1">MEAT</span>
        <span className="name2">FIT</span> */}
        <img src={Logo} alt="" className="logo" />
      </div>
      {/* lOGO ENDS HERE */}

      {/* NAV-LINKS START HERE */}
      <div className="nav__links">
        <div className="beef ">
          <a>Beef</a>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z"
                fill="#000000"
              ></path>{" "}
            </g>
          </svg>
        </div>

        <div className="meat ">
          <a>Meat</a>
        </div>

        <div className="chicken ">
          <a>Chicken</a>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z"
                fill="#000000"
              ></path>{" "}
            </g>
          </svg>
        </div>

        <div className="sea-food ">
          <a>Sea Food</a>
        </div>

        <div className="poultry ">
          <a>Poultry</a>
        </div>
      </div>
      {/* NAV-LINKS ENDS HERE */}

      {/* NAV-ACTIONS STARTS HERE */}
      <div className="nav__actions">
        <img src={user} alt="" />
        <img src={heart} alt="" />
        <img src={shopping} alt="" />
      </div>
      {/* NAV-ACTIONS ENDS HERE */}
    </nav>
  );
}
