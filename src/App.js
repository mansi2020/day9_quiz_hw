import { useState } from "react";
import "./App.css";
import QuizMain from "./Component/QuizMain/QuizMain";
import quizImage from "./Component/quizHomeImage.svg";

function App() {
  let [showQuiz, setShowQuiz] = useState(false);
  function onClickStartTest() {
    setShowQuiz(true);
  }
  return (
    <div className="App">
      {showQuiz ? (
        <QuizMain></QuizMain>
      ) : (
        <div className="app-content">
          <img src={quizImage} alt="" />
          <div className="app-content-sub">
            <h1>QuizQuest: Explore, Learn, Play!</h1>

            <button onClick={onClickStartTest}>Start Test</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
