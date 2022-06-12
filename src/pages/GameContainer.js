import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import LetterPanel from '../components/LetterPanel';
import QuestionPanel from '../components/QuestionPanel';
import TimerPanel from '../components/TimerPanel';

function GameContainer() {
  return (
    <div>
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