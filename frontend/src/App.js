import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
