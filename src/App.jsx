import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/login/AdminLogin";
import UserLogin from "./pages/user/login/UserLogin";
import AdminHome from "./pages/admin/adminHome/AdminHome";
import CreateQuestion from "./pages/admin/createQuestion/CreateQuestion";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLogin />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/adminHome" element={<AdminHome />}></Route>
      <Route path="/createQuestion" element={<CreateQuestion />}></Route>
    </Routes>
  );
}
