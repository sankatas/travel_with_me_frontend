import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Screens/Login/Login"
import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";

function RootStack() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default RootStack;
