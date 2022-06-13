import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import LetterPanel from '../components/LetterPanel';
import QuestionPanel from '../components/QuestionPanel';
import TimerPanel from '../components/TimerPanel';

function GameContainer({name, room}) {
  return (
    <div>
        <h3 style={{textAlign: "center"}}>{name} is in the {room} room</h3>
        <Container>
            <Row>
                <Col>
                    <LetterPanel/>
                </Col>
                <Col>
                    <QuestionPanel/>
                </Col>
                <Col>
                    <TimerPanel/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default GameContainer