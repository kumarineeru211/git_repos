import React from "react";
import style from "./Test.module.css";
import Button from "../../../components/button/Button";

export default function Test() {
  return (
    <div className={style.mainBox}>
      <h2> This is the question.</h2>
      <div className={style.optionSection}>
        <div id={style.option}>
          <div id={style.option}>1. options</div>
          <div id={style.option}>2. options</div>
          <div id={style.option}>3. options</div>
          <div id={style.option}>4. options</div>
        </div>

        <div id={style.imgOutline}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-GDv4TEvVaZePX37LgJqE5p0ldLMVlY4CGpSuR0&s" />
        </div>
      </div>
      <Button value={"Next"} />
    </div>
  );
}
