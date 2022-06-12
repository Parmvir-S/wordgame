import React, { useEffect } from 'react'
import { Card, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import "../styles/TimerPanel.css";

function TimerPanel() {
  const [ time, setTime ] = useState(60);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {  
              setTime(time => time - 1);
              if (time === 0) {
                  toggle();
              }
          }, 1000);
        } else if (!isActive && time === -1) {
          clearInterval(interval);
          alert("Game Over");
        }
        return () => clearInterval(interval);
      }, [isActive, time])

  const timerFunc = (timeArg) => {
    setTime(timeArg)
    toggle();
  }

  return (
    <div className='timerPanel'>
        <Card style={{ width: '100%', marginTop: "25%" }}>
            <Card.Title style={{ fontSize: "10em"}}>{time}</Card.Title>
            <Card.Body>
                <Card.Text>
                Answer As Many Questions As You Can Before The Time Runs Out
                </Card.Text>
            </Card.Body>

            <Card.Body>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => timerFunc(30)} variant="info">30 Seconds</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => timerFunc(60)} variant="info">60 Seconds</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => timerFunc(90)} variant="info">90 Seconds</Button>
                    </Col>
                </Row>
            </Container>
            </Card.Body>
        </Card>
    </div>
  )
}

export default TimerPanel