import React from 'react'
import { Navbar, Container } from "react-bootstrap";
import LOGO from "../assets/images/logo.png";

function Navibar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={LOGO}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Word Game
                </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navibar