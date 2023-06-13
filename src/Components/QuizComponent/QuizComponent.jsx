import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Assets/Css/bootstrap.min.css";
import "../../Assets/Css/style.css";
import { QuizData } from "../Data/QuizData";
import QuizResult from "../QuizResult/QuizResult";

const QuizComponent = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const nextQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setcurrentQuestion(currentQuestion + 1);
      setClicked(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clicked === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setcurrentQuestion(0);
    setClicked(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <>
      <Container fluid={true} className='mainContainer text-center'>
        <h1 className='appTitle'>Quiz App</h1>
        <Row>
          <Col>
            <div className='wrappingContainer'>
              <div className='quizContainer'>
                {showResult ? (
                  <QuizResult
                    tryAgain={resetAll}
                    score={score}
                    totalScore={QuizData.length}
                  />
                ) : (
                  <>
                    <div className='questionContainer'>
                      <span className='questionNmr'>
                        {" "}
                        {currentQuestion + 1}.{" "}
                      </span>
                      <span className='question'>
                        {QuizData[currentQuestion].question}
                      </span>
                    </div>
                    <div className='optionContainer'>
                      {QuizData[currentQuestion].options.map(
                        (option, index) => {
                          return (
                            <button
                              className={`optionBtn ${
                                clicked == index + 1 ? "activeBtn" : "null"
                              }`}
                              onClick={() => setClicked(index + 1)}
                              key={index}
                            >
                              {option}
                            </button>
                          );
                        }
                      )}
                    </div>
                    <button
                      onClick={nextQuestion}
                      className='btn btn-primary nxtBtn'
                    >
                      Next
                    </button>
                  </>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default QuizComponent;
