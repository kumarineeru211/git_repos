import React, { useEffect, useState } from "react";
import style from "./Test.module.css";
import Button from "../../../components/button/Button";
import { useSelector } from "react-redux";
import { getLocalData } from "../../../Utils";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const [data, setData] = useState([]); //[ {} {} {} ]
  const [questionset, setQuestionset] = useState([]); //[12,45,65,,3,222,3]
  const [questionCount, setQuestionCount] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(questionset[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageData = getLocalData();
    setData([...localStorageData]);
    const tempArr = [];
    for (let i = 0; i < 10; i++) {
      const questionNum = Math.floor(Math.random() * 1 * 50);
      tempArr.push(questionNum);

      // array for question num prepared
    }
    setQuestionset([...tempArr]);
    // dispatch(setQestionData(localStorageData));
  }, []);

  //   useEffect(() => {
  //     const questionNum = Math.floor(Math.random() * 1 * data.length);
  //     console.log(questionNum);
  //   }, []);

  function handleQuestionNext() {
    if (questionCount < 9) {
      setQuestionCount(questionCount + 1);
    } else {
      navigate("/result");
    }
  }

  return (
    <div className={style.mainBox}>
      {questionset.length != 0 && (
        <span>
          {questionCount + 1}
          <h2>{data[questionset[questionCount]].question}</h2>
        </span>
      )}

      <div className={style.optionSection}>
        {questionset.length != 0 && (
          <div id={style.option}>
            <div id={style.option}>
              1. {data[questionset[questionCount]].options[0]}
            </div>
            <div id={style.option}>
              2. {data[questionset[questionCount]].options[1]}
            </div>
            <div id={style.option}>
              3. {data[questionset[questionCount]].options[2]}
            </div>
            <div id={style.option}>
              4. {data[questionset[questionCount]].options[3]}
            </div>
          </div>
        )}

        <div id={style.imgOutline}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-GDv4TEvVaZePX37LgJqE5p0ldLMVlY4CGpSuR0&s" />
        </div>
      </div>
      <Button onClick={handleQuestionNext} value={"Next"} />
      {/* <div>{JSON.stringify(data)}</div> */}
      {/* <div>{JSON.stringify(questionset)}</div> */}
    </div>
  );
}
