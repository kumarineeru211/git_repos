import React, { useState, useEffect } from "react";
import style from "./UserHome.module.css";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { getLocalData } from "../../../Utils";
// import { useDispatch } from "react-redux";
// import { setQestionData } from "../../../state/QuestionSlice";

export default function UserHome() {
  //   const data = useSelector((state) => state.questions.data);
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const localStorageData = getLocalData();
    // setData([...localStorageData]);
    // dispatch(setQestionData(localStorageData));
  }, []);

  function handleStartTest() {
    navigate("/test");
  }

  return (
    <div className={style.mainBox}>
      <h2>Hello User</h2>
      <div id={style.foot}>
        <Button onClick={handleStartTest} value={"Start Test"}></Button>
      </div>
      {/* <div>{JSON.stringify(data)}</div> */}
    </div>
  );
}
