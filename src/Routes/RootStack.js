import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Screens/Login/Login"
import Home from "../Screens/Home/Home";

function RootStack() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default RootStack;
