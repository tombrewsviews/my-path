import React from "react";
import ModalFull from "./../components/modal";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./../App.css";
import Routines from "./Routines";

export default function Challenges() {
  return (
    <div>
      <Routes>
        <Route path="routines" element={<Routines />}></Route>
      </Routes>
      <Link to="/">Home</Link>
      <Link to="routines">Routines</Link>
    </div>
  );
}
