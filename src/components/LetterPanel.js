import React from 'react'
import { Card, Button } from "react-bootstrap";
import "../styles/LetterPanel.css";
import { useState } from "react";


function LetterPanel() {
  let [ letter, setLetter ] = useState("A");
  let alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const setLetter2 = () => {
    let randomNum = Math.floor(Math.random() * 26);
    return alphabetArr[randomNum].toUpperCase();
  }

  return (
    <div className='letterPanel'>
        <Card style={{ width: '100%', marginTop: "25%" }}>
            <Card.Title style={{ fontSize: "10em"}}>{letter}</Card.Title>
            <Card.Body>
                <Card.Text>
                Provide Answers That Start With This Letter
                </Card.Text>
            </Card.Body>

            <Card.Body>
            <Button onClick={() => setLetter(setLetter2())} variant="info">New Letter</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default LetterPanel