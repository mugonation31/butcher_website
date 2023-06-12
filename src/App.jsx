import React from "react";
import Home from "./components/home/Home.jsx";
import Hero from "./components/hero/Hero.jsx";
import Nav from "./components/nav/Nav.jsx";
import Socials from "./components/socials/Socials.jsx";
import Process from "./components/process/Process.jsx";
import History from "./components/history/History.jsx";

import "./App.scss";

function App() {
  return (
    <Home>
      <Nav />
      <Hero />
      <Socials />
      <Process />
      <History />
    </Home>

    // <Product>
    //   <Nav />
    //   <Header />
    // </Product>
  );
}

export default App;
