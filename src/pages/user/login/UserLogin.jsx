import React from "react";
import style from "./Login.module.css";
import FormInput from "../../../components/formInput/FormInput";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";

export default function UserLogin() {
  return (
    <div className={style.mainBox}>
      <h2>User Login</h2>
      <FormInput />
      <FormInput />
      <Button value={"Submit"} />
      <span>
        Switch to <Link to="/adminlogin">admin</Link>
      </span>
    </div>
  );
}
