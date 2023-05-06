import React, { useState, useEffect } from "react";
import style from "./AdminHome.module.css";
import Button from "../../../components/button/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../../state/QuestionSlice";

export default function AdminHome() {
  const [data, setData] = useState([]);
  const selectData = useSelector((state) => state.questions.data);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple"
      )
      .then((res) => dispatch(addData(res.data.results || null)));
  }, []);
  console.log(data);
  return (
    <div className={style.mainBox}>
      <h2>Hi Admin</h2>
      <div id={style.foot}>
        <Button value={"Edit Questions"} />
        <Button value={"Create Question"}></Button>
      </div>
      <div>{JSON.stringify(selectData)}</div>
    </div>
  );
}
