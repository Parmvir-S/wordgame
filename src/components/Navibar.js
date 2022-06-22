import React, {useState} from 'react'
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import LOGO from "../assets/images/logo.png";
import "../styles/Navibar.css";

function Navibar() {

  const [score, setScore] = useState(0);
  const [overallScore, setOverallScore] = useState(0);

  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand id="logoCont" href="#home">
                    <img
                    alt=""
                    src={LOGO}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Word Game
                </Navbar.Brand>
                <div className='score'>
                  <Button  variant="info" onClick={() => setScore(score + 1)}>+</Button>
                  <p style={{color: "white", marginTop: "1em"}}> Current: {score}</p>
                  <Button  variant="info" onClick={() => setScore(score - 1)}>-</Button>

                  <Button  variant="info" onClick={() => setOverallScore(overallScore + 1)}>+</Button>
                  <p style={{color: "white", marginTop: "1em"}}>Total: {overallScore}</p>
                  <Button  variant="info" onClick={() => setOverallScore(overallScore - 1)}>-</Button>
                </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navibar