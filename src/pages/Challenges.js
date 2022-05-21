import React from "react";
import ModalFull from "./../components/modal";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { BrowserRouter, NavLink, Link, Route, Routes } from "react-router-dom";
import "./../App.css";
import Routines from "./Routines";
import Processes from "./Processes";
import Growth from "./Growth";
import logout from "./../images/logout_g.svg";

export default function Challenges() {
  const tab = {
    textDecoration: "none",
    padding: "10px 24px",
    backgroundColor: "transparent",
    color: "#fff",
    borderRadius: "22px",
    fontWeight: "600",
    fontSize: "14px",
    marginLeft: "4px",
    marginRight: "4px",
  };
  const tabActiveGrowth = {
    textDecoration: "none",
    padding: "10px 24px",
    backgroundColor: "#434C55",
    color: "#fff",
    borderRadius: "22px",
    fontWeight: "600",
    fontSize: "14px",
    marginLeft: "4px",
    marginRight: "4px",
    transition: "all 150ms ease-in",
  };
  const tabActiveProcesses = {
    textDecoration: "none",
    padding: "10px 24px",
    backgroundColor: "#554354",
    color: "#fff",
    borderRadius: "22px",
    fontWeight: "600",
    fontSize: "14px",
    marginLeft: "4px",
    marginRight: "4px",
    transition: "all 150ms ease-in",
  };
  const tabActiveRoutines = {
    textDecoration: "none",
    padding: "10px 24px",
    backgroundColor: "#434D60",
    color: "#fff",
    borderRadius: "22px",
    fontWeight: "600",
    fontSize: "14px",
    marginLeft: "4px",
    marginRight: "4px",
    transition: "all 150ms ease-in",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: "1",
          position: "fixed",
          top: "80px",
          margin: "0 auto",
          left: "0px",
          right: "0px",
          float: "clear",
          zIndex: "3",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: "24px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "rgba(19,21,26,0.3)",
            height: "48px",
            backdropFilter: "blur(15px)",
          }}
        >
          <NavLink
            to="growth"
            style={({ isActive }) => (isActive ? tabActiveGrowth : tab)}
          >
            Growth
          </NavLink>
          <NavLink
            to="processes"
            style={({ isActive }) => (isActive ? tabActiveProcesses : tab)}
          >
            Processes
          </NavLink>
          <NavLink
            to="routines"
            style={({ isActive }) => (isActive ? tabActiveRoutines : tab)}
          >
            Routines
          </NavLink>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: "80px",
          left: "100px",
          zIndex: 3,
        }}
      >
        <Link to="/my-path">
          <img
            src={logout}
            style={{ height: "48px", width: "48px" }}
            alt="back"
          />
        </Link>
      </div>
      <div
        style={{
          position: "fixed",
          top: "80px",
          right: "-100px",
          zIndex: 3,
          // opacity: "0.5",
        }}
      >
        <p
          style={{
            width: "20px",
            fontSize: "14px",
            color: "#6A6E84",
            fontWeight: "700",
            lineHeight: "1",
            position: "absolute",
            top: "0px",
            right: "200px",
          }}
        >
          私の製品リードパス
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#6A6E84",
            fontWeight: "700",
            lineHeight: "1",
            transform: "rotate(90deg)",
            transformOrigin: "10px 10px",
            position: "absolute",
            top: "0px",
            right: "0px",
            width: "200px",
          }}
        >
          My Product Lead Path
        </p>
      </div>
      <Routes>
        <Route path="routines" element={<Routines />}></Route>
        <Route path="processes" element={<Processes />}></Route>
        <Route path="growth" element={<Growth />}></Route>
      </Routes>
    </div>
  );
}
