import React from "react";
import style from "./FormInput.module.css";

export default function FormInput({ onChange }) {
  return <input id={style.inputBox} type="text" onChange={onChange}></input>;
}
