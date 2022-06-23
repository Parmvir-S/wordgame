import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import LetterPanel from '../components/LetterPanel';
import QuestionPanel from '../components/QuestionPanel';
import TimerPanel from '../components/TimerPanel';
import "../styles/GameContainer.css";
import { motion } from "framer-motion";
import UsersPanel from '../components/UsersPanel';

function GameContainer({name, room}) {
  return (
    <div>
        <UsersPanel room={room} name={name}/>
        <Container>
            <Row className="rowstyle">
                <Col sm={6} md={4}>
                    <motion.div
                        initial={{x: "100vw"}}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", delay: 0.5 }}
                    >
                        <LetterPanel room={room}/>
                        <TimerPanel room={room}/>
                    </motion.div>
                </Col>
                <Col sm={6} md={8}>
                <motion.div
                        initial={{y: "100vw"}}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", delay: 0.5 }}
                    >
                        <QuestionPanel room={room}/>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default GameContainer