import React from "react";
import Nav from "./components/nav/Nav.jsx";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import "./App.scss";

function App() {
  return (
    <Home>
      <Nav />
      <Header />
    </Home>
  );
}

export default App;
