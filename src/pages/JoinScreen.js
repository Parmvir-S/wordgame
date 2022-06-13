import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import Navibar from "../components/Navibar";
import GameContainer from "./GameContainer";
import socket from "../utils/socketConfig";

function JoinScreen() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [show, setShow] = useState(false);

  const joinGame = () => {
    //have user join room here - socket.emit("join-room", roomName or data with name)
    //when person chooses letter everyone in room gets that letter displayed
    //when person starts timer - it starts for everyone in the same room
    const data = {
      name,
      room
    }
    socket.emit("join-room", data);
    setShow(true);
  }
  return (
    <div className="joinScreen">
       {(!show) ? (
      <>
         <Card style={{ width: "18rem", margin: "auto auto", marginTop: "10%" }}>
        <Card.Body>
          <Card.Title>Word Game</Card.Title>
          <strong>Name</strong>
          <Form.Control
            value={name}
            placeholder="Naruto"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <strong>Room</strong>
          <Form.Control
            value={room}
            placeholder="Konoha"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
          <Button onClick={joinGame} variant="primary">Join</Button>
        </Card.Body>
      </Card>
      </>
    ) : (
      <>
        <Navibar/>
        <GameContainer name={name} room={room}/>
      </>
    )}
    </div>
  );
}

export default JoinScreen;
