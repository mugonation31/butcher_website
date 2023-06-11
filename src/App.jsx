import React from "react";
import Home from "./components/home/Home.jsx";
import Hero from "./components/hero/Hero.jsx";
import Nav from "./components/nav/Nav.jsx";
import Socials from "./components/socials/Socials.jsx";
import Product from "./components/product/Product.jsx";
import Header from "./components/header/Header.jsx";
import "./App.scss";

function App() {
  return (
    <Home>
      <Nav />
      <Hero />
      <Socials />
    </Home>

    // <Product>
    //   <Nav />
    //   <Header />
    // </Product>
  );
}

export default App;
