import React, { useState, useEffect } from "react";
import style from "./AdminHome.module.css";
import Button from "../../../components/button/Button";
import axios from "axios";

export default function AdminHome() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple"
      )
      .then((res) => setData(res.data.results));
  }, []);
  console.log(data);
  return (
    <div className={style.mainBox}>
      <h2>Hi Admin</h2>
      <div id={style.foot}>
        <Button value={"Edit Questions"} />
        <Button value={"Create Question"}></Button>
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
