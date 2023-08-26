import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Screens/Login/Login"

function RootStack() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default RootStack;
