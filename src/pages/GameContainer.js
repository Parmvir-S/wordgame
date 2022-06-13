import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import LetterPanel from '../components/LetterPanel';
import QuestionPanel from '../components/QuestionPanel';
import TimerPanel from '../components/TimerPanel';
import "../styles/GameContainer.css";

function GameContainer({name, room}) {
  return (
    <div>
        <h3 style={{textAlign: "center", marginBottom: "-5% "}}>{name} is in the {room} room</h3>
        <Container>
            <Row className="rowstyle">
                <Col sm={6} md={4}>
                    <LetterPanel room={room}/>
                </Col>
                <Col sm={6} md={4}>
                    <QuestionPanel room={room}/>
                </Col>
                <Col sm={6} md={4}>
                    <TimerPanel room={room}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default GameContainer