import React, { useState } from "react";
import style from "./CreateQuestion.module.css";
import Button from "../../../components/button/Button";
import FormInput from "../../../components/formInput/FormInput";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../../state/QuestionSlice";

export default function CreateQuestion() {
  const [questionData, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [question2, setOption2] = useState("");
  const [question3, setOption3] = useState("");
  const [question4, setOption4] = useState("");
  const [corrctAnsIdx, setCorrectAnsIdx] = useState(0);
  const dispatch = useDispatch();

  function handleQuestionAdd() {
    const questionObj = {
      question: questionData,
      correct_answer: corrctAnsIdx,
      options: [option1, question2, question3, question4],
    };
    // console.log(questionObj);
    dispatch(addQuestion(questionObj));

    ///data in receiving inreducer but not sure about setting in data array
  }

  return (
    <div className={style.mainBox}>
      <FormInput
        placeholder="Question here..."
        onChange={(e) => setQuestion(e.target.value)}
        type={"text"}
      />
      <FormInput
        placeholder="Option 1"
        onChange={(e) => setOption1(e.target.value)}
        type={"text"}
      />
      <FormInput
        placeholder="Option 2"
        onChange={(e) => setOption2(e.target.value)}
        type={"text"}
      />
      <FormInput
        placeholder="Option 3"
        onChange={(e) => setOption3(e.target.value)}
        type={"text"}
      />
      <FormInput
        placeholder="Option 4"
        onChange={(e) => setOption4(e.target.value)}
        type={"text"}
      />
      <FormInput
        placeholder="Correct option number"
        onChange={(e) => setCorrectAnsIdx(e.target.value)}
        type={"number"}
      />
      <input type="file" />
      <Button onClick={handleQuestionAdd} value={"Submit"} />
    </div>
  );
}
