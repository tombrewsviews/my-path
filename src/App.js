import React from "react";
import avatar1 from "./images/avatar1.jpg";
import world from "./images/world.svg";
import value from "./images/value.svg";
import fight from "./images/fight.svg";
import ButtonPrimary from "./components/buttonPrimary";
import ModalFull from "./components/modal";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Challenges from "./pages/Challenges";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/my-path" element={<Home />}></Route>
          <Route path="/challenges/*" element={<Challenges />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
