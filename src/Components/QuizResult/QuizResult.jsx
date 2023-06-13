import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const QuizResult = (props) => {
  return (
    <>
      <Container className='text-center'>
        <Row>
          <Col>
            <div className='resultPage'>
              <h1>You Got:{props.score}</h1>
              <h2 className='h1'>Total Marks:{props.totalScore}</h2>
              <button
                onClick={props.tryAgain}
                className='btn btn-primary tryAgainBtn'
              >
                Try Again
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default QuizResult;
