import React from "react";
import ModalFull from "./../components/modal";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./../App.css";
import Routines from "./Routines";
import Processes from "./Processes";
import Growth from "./Growth";
import logout from "./../images/logout_w.svg";

export default function Challenges() {
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
            backgroundColor: "rgba(19,21,26,0.5)",
            height: "48px",
            backdropFilter: "blur(10px)",
          }}
        >
          <Link to="routines" style={{ textDecoration: "none" }}>
            <p
              style={{
                padding: "10px 24px",
                backgroundColor: "#434655",
                color: "#fff",
                borderRadius: "22px",
                fontSize: "14px",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              Routines
            </p>
          </Link>
          <Link to="processes" style={{ textDecoration: "none" }}>
            <p
              style={{
                padding: "10px 24px",
                backgroundColor: "transparent",
                color: "#fff",
                borderRadius: "22px",
                fontSize: "14px",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              Processes
            </p>
          </Link>
          <Link to="growth" style={{ textDecoration: "none" }}>
            <p
              style={{
                padding: "10px 24px",
                backgroundColor: "transparent",
                color: "#fff",
                borderRadius: "22px",
                fontSize: "14px",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              Growth
            </p>
          </Link>
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
            style={{ height: "48px", width: "48px", opacity: "0.3" }}
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
        }}
      >
        <p
          style={{
            width: "20px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "Poppins",
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
            color: "rgba(255,255,255,0.3)",
            fontFamily: "Poppins",
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
