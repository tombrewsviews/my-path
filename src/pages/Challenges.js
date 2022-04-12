import React from "react";
import ModalFull from "./../components/modal";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./../App.css";
import Routines from "./Routines";
import Processes from "./Processes";
import Growth from "./Growth";

export default function Challenges() {
  return (
    <div>
      <Link to="/my-path">Home</Link>
      <Link to="routines">Routines</Link>
      <Link to="processes">Processes</Link>
      <Link to="growth">Growth</Link>
      <Routes>
        <Route path="routines" element={<Routines />}></Route>
        <Route path="processes" element={<Processes />}></Route>
        <Route path="growth" element={<Growth />}></Route>
      </Routes>
    </div>
  );
}
