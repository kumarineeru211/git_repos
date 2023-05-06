import React from "react";
import style from "./FormInput.module.css";

export default function FormInput({ onChange, placeholder, type }) {
  return (
    <input
      placeholder={placeholder}
      id={style.inputBox}
      type={type}
      onChange={onChange}
    ></input>
  );
}
