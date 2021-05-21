import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Countdown from "react-countdown";
import "./Timer.css"
const Timer = () => {
  let [date, setDate] = useState(Date.now() + (1 * 60 * 60 * 1000) + 1);

  const start = () => {
    setDate(Date.now() + (1 * 60 * 60 * 1000) + 1);
  }

  return (
    <>
      <Countdown date={date} className="timer-style" onComplete={start}/>
      <Container>
        <Row>
          <Col>
            <Button onClick={start}>
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Timer;
