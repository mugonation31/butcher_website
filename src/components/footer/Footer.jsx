import React from "react";
import "./Footer.scss";
import elipse from "../../assets/images/elipse.png";
import new1 from "../../assets/images/new1.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={elipse} alt="" className="elipse" />
      <img src={new1} alt="" className="new1" />

      <div className="footer__wrap">
        <div className="retail">
          <div className="shop">
            <div className="heading">
              <span>Shop</span>
            </div>
            <div className="span">
              <span>Speciality</span>
              <span>Offers</span>
              <span>Updates</span>
              <span>Best Seller</span>
            </div>
          </div>
          <div className="about">
            <div className="heading">
              <span>About Us</span>
            </div>
            <div className="span">
              <span>Who We Are</span>
              <span>Our Achievement</span>
              <span>Our Service</span>
              <span>Testimonials</span>
            </div>
          </div>
        </div>
        <div className="subscribe">
          <div className="header">
            <div className="small-logo">
              <span className="name1">MEAT</span>
              <span className="name2">FIT</span>
            </div>
            <span className="trusted">A Trusted Meat Shop</span>
          </div>
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe</button>

          <div className="copyright">
            <span>CopyRight 2021 Alright reserved by Meatfit</span>
          </div>
        </div>
        <div className="find">
          <div className="contact">
            <div className="heading">
              <span>Contact</span>
            </div>

            <div className="span">
              <span>HelloMeat@gmail.com</span>
              <span>Opening Hours</span>
              <span>Location</span>
              <span>097 56568 77</span>
            </div>
          </div>

          <div className="socials">
            <div className="heading">
              <span>Social Links</span>
            </div>

            <div className="span">
              <span>Facebook Page</span>
              <span>Instagram</span>
              <span>Twitter</span>
              <span>Pinterest</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
