import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/login/AdminLogin";
import UserLogin from "./pages/login/UserLogin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLogin />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
    </Routes>
  );
}
