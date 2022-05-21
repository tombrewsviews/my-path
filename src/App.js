import React from "react";
import "animate.css/animate.compat.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
