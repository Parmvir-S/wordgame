import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import LetterPanel from '../components/LetterPanel';
import QuestionPanel from '../components/QuestionPanel';
import TimerPanel from '../components/TimerPanel';
import "../styles/GameContainer.css";
import socket from "../utils/socketConfig";

function GameContainer({name, room}) {

    const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("roomUsers", (users) => {
        setUsers(users.roomUsers);
    })
  }, [socket]);   

  return (
    <div>
        <h3 style={{textAlign: "center"}}>Room: {room.charAt(0).toUpperCase() + room.slice(1)}</h3>
        <div id="roomMembers">
            {users.map((user) => {
                return (
                    <p key={user.name + socket.id}>{user.name === name ? user.name.toUpperCase() : user.name}</p>

                )
            })}
        </div>
        <Container>
            <Row className="rowstyle">
                <Col sm={6} md={4}>
                    <LetterPanel room={room}/>
                    <TimerPanel room={room}/>
                </Col>
                <Col sm={6} md={8}>
                    <QuestionPanel room={room}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default GameContainer