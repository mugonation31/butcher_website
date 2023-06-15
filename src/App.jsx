import React from "react";
import Home from "./components/home/Home.jsx";
import Hero from "./components/hero/Hero.jsx";
import Nav from "./components/nav/Nav.jsx";
import Socials from "./components/socials/Socials.jsx";
import Process from "./components/process/Process.jsx";
import History from "./components/history/History.jsx";
import Customer from "./components/customer/Customer.jsx";
import Recent from "./components/recent/Recent.jsx";
import Categories from "./components/categories/Categories.jsx";
import FAQ from "./components/faq/FAQ.jsx";
import Footer from "./components/footer/Footer.jsx";

import "./App.scss";

function App() {
  return (
    <Home>
      <Nav />
      <Hero />
      <Socials />
      <Process />
      <History />
      <Customer />
      <Recent />
      <Categories />
      <FAQ />
      <Footer />
    </Home>

    // <Product>
    //   <Nav />
    //   <Header />
    // </Product>
  );
}

export default App;
