import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Screens/Login/Login"
import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";
import CreateForm from "../Screens/CreateForm/CreateForm";
import CreateUser from "../Screens/CreateUser/CreateUser";

function RootStack() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateForm />} />
          <Route path="/createuser" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default RootStack;
