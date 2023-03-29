import React from 'react';
import Question from './Question';
// import './style.css';
import questions from './data.js';

import Evaluation from './Evaluation';

export default function App() {
  const [qNo, setQNo] = React.useState(0);
  const [showEvaluation, setShowEvaluation] = React.useState(false);
  const answers = React.useRef([]);

  console.log('ref', answers.current);
  const changeQuestion = () => {
    console.log('Change the question!');
    setQNo((qNo + 1) % questions.length);
  };

  const evaluate = () => {
    setShowEvaluation(!showEvaluation);
    console.log('Evaluating answers');
    console.log('QUESTIONS', questions);
    console.log('ANSWERS', answers.current);
  };

  return (
    <div>
      <Question {...questions[qNo]} index={qNo} ans={answers.current} />
      <button
        className="btn btn-danger"
        onClick={changeQuestion}
        style={{ marginLeft: '20px', backgroundColor:'red' }}
      >
        Next
      </button>
      <button
        className="btn btn-success"
        onClick={changeQuestion}
        style={{ marginLeft: '20px',backgroundColor:'green' }}
        onClick={evaluate}
      >
        Submit
      </button>
      {showEvaluation && (
        <Evaluation ans={answers.current} questions={questions} />
      )}
    </div>
  );
}
