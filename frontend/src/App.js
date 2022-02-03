import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Baby from "./components/Baby";
import Homepage from "./components/Homepage";
import Kids from "./components/Kids";
import Men from "./components/Men";
import Nav from "./components/Nav";
import Women from "./components/Women";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/baby" element={<Baby />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
