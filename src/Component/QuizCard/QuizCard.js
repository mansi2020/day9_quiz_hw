import { useState, useEffect } from "react";
import "./QuizCard.css";

const QuizCard = (props) => {
  // onClickBtn
  let onClickBtn = (key, idx) => {
    props.onClickOption(key, idx);
  };
  // onClickSkip
  let onClickSkip = () => {
    props.onClickSkip();
  };

  //useefect timer for every question
  let [timer, setTimer] = useState(10);
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((preVal) => {
        let updatedVal = preVal - 1;
        if (updatedVal == 0) {
          props.goNextQuestion();
          clearInterval(interval);
        }
        return updatedVal;
      });
    }, 800);
  }, []);

  return (
    <section>
      <div className="quizcard-container">
        <h1>Question {props.questionNum}</h1>
        <p className="quizcard-question">{props.question}</p>
        <ul>
          {Object.entries(props.answers).map(([key, value], idx) => {
            if (value != null) {
              return (
                <button
                  className="quizcard-options"
                  key={key}
                  onClick={() => onClickBtn(key, idx)}
                  style={{ display: "block" }}
                >
                  <li>{value}</li>
                </button>
              );
            }
          })}
        </ul>
        <p className="quizcard_timer">Time Left: {timer} seconds</p>
        <button onClick={onClickSkip}>Skip Question</button>
      </div>
    </section>
  );
};

export default QuizCard;
