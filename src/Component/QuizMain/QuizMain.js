import { useEffect, useState } from "react";
import QuizCard from "../QuizCard/QuizCard";
import "./QuizMain.css";

const QuizMain = () => {
  // state variables
  let [quizData, setQuizData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [currentIdx, setCurrentIdx] = useState(0);
  let [counter, setCounter] = useState(0);

  // fetch data from api
  useEffect(() => {
    try {
      let fetchData = async () => {
        let apikey = "cR2CgjUoDf82VGQZnsn5qKstSCYbjkMvZLZ1gDkw";
        let response = await fetch(
          `https://quizapi.io/api/v1/questions?apiKey=${apikey}&limit=10`
        );
        response = await response.json();
        setQuizData(response);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log("Error", error);
    }
  }, []);

  console.log(quizData);

  //onClickChangeQuestion
  let onClickChangeQuestion = () => {
    setCurrentIdx((preVal) => preVal + 1);
  };
  // onClickCheckAnswer
  let onClickCheckAnswer = (key, idx) => {
    setCurrentIdx((preVal) => preVal + 1);
    let val = `${key}_correct`;
    if (quizData[idx].correct_answers[val] == "true") {
      setCounter((preVal) => preVal + 1);
    }
  };

  // goNextQuestion when time is complete
  let goNextQuestion = () => {
    setCurrentIdx((preVal) => preVal + 1);
  };

  return (
    <div className="quizmain-container">
      {loading ? (
        <p className="quizmain-loading">Loading...</p>
      ) : currentIdx <= 9 ? (
        quizData.map((question, idx) => {
          return (
            idx == currentIdx && (
              <QuizCard
                key={idx}
                {...question}
                questionNum={idx + 1}
                onClickOption={onClickCheckAnswer}
                onClickSkip={onClickChangeQuestion}
                goNextQuestion={goNextQuestion}
              ></QuizCard>
            )
          );
        })
      ) : (
        <div className="quizmain-end">
          <h1>Quiz Ended</h1>
          <p>Your Score : {counter}/10</p>
        </div>
      )}
    </div>
  );
};

export default QuizMain;
