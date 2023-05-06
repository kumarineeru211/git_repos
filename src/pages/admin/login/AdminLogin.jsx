import React, { useState } from "react";
import style from "./AdminLogin.module.css";
import FormInput from "../../../components/formInput/FormInput";
import Button from "../../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    let adminData = { email: email, password: password, isLoggedIn: true };
    localStorage.setItem("adminAuth", JSON.stringify(adminData));
    navigate("/adminhome");
  }

  return (
    <div className={style.mainBox}>
      <h2>Admin Login</h2>
      <FormInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSubmit} />
      <span>
        Switch to <Link to="/">User</Link>
      </span>
    </div>
  );
}
