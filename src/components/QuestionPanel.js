import React, { useEffect } from "react";
import {
  ListGroup,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Card,
} from "react-bootstrap";
import "../styles/QuestionPanel.css";
import { useState } from "react";
import { db } from "../db/firebase";
import { addDoc, collection, getDocs, doc } from "firebase/firestore";

function QuestionPanel() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [questions, setQuestions] = useState("");
  const [questionCollection, setQuestionCollection] = useState("");
  let quesDisplay = document.querySelector(".questionDisplay");

  const displayQuestions = (data) => {
    let topics = data.split(",");
    return (
      <>
        <ListGroup
          as="ol"
          numbered
          style={{ width: "18rem", marginTop: "25%"}}
        >
          {topics.map((topic) => {
            const div = document.createElement("div");
            div.innerHTML = `<li>${topic}</li>`;
            div.style.cssText = "border: 0.1px solid grey; margin-top: 5%; border-radius: 2px";
            quesDisplay.appendChild(div);
          })}
        </ListGroup>
      </>
    );
  };

  const clearQuestionsDisplay = () => {
    quesDisplay.innerHTML = "";
  };

  const questionHandler = () => {
    displayQuestions(questions);
  };

  const topicsCollectionRef = collection(db, "topicsCollection");
  const addQuestionToDB = async () => {
    await addDoc(topicsCollectionRef, {
      topicName: questionCollection,
      topics: questions,
    });
  };

  const [modal2Show, setModal2Show] = useState(false);
  const modal2HandleClose = () => setModal2Show(false);
  const modal2HandleShow = () => setModal2Show(true);
  const [topicsDB, setTopicsDB] = useState([]);

  const getTopics = async () => {
    const data = await getDocs(topicsCollectionRef);
    setTopicsDB(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(topicsDB);
  };

  const renderPosts = (post, index) => {
    return (
      <Card
        style={{
          width: "75%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5%",
          borderRadius: "20px",
          boxShadow: " 0 3px 3px rgba(0,0,0,0.2)",
        }}
        key={index}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5em" }}>
            {post.topicName}
          </Card.Title>
          <Card.Text>{post.topics}</Card.Text>
        </Card.Body>
        <Button
          onClick={() => {
            clearQuestionsDisplay();
            setQuestions(post.topics);
            questionHandler();
          }}
        >
          Select Topics
        </Button>
      </Card>
    );
  };

  return (
    <div className="questionPanel">
      <Container>
        <Row>
          <Col>
            <ol
              className="questionDisplay"
              as="ol"
              numbered
              style={{ width: "100%", marginTop: "25%" }}
            ></ol>
          </Col>
        </Row>
        <br /> <br />
        <Row>
          <Col>
            <Button id="modalButton" variant="info" onClick={handleShow}>
              Add Topics
            </Button>
          </Col>
          <Col>
            <Button
              id="modalButton"
              variant="info"
              onClick={() => {
                getTopics();
                modal2HandleShow();
              }}
            >
              Get Topics
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Modals for adding and getting questions/topics */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Topics</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Give This Set Of Topics A Name</Modal.Body>
        <Form.Control
          value={questionCollection}
          onChange={(e) => setQuestionCollection(e.target.value)}
          type="text"
          placeholder="Topics Collection Name"
        />
        <br />

        <Modal.Body>Enter 10 Topics Separated By Commas</Modal.Body>
        <Form.Control
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          as="textarea"
          placeholder=""
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              clearQuestionsDisplay();
              questionHandler();
              addQuestionToDB();
            }}
          >
            Add Topics
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modal2Show} onHide={modal2HandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get Topics</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pick A Collection Of Topics:</Modal.Body>
        <div className="homePage">{topicsDB.map(renderPosts)}</div>;
        <Modal.Footer>
          <Button variant="secondary" onClick={modal2HandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default QuestionPanel;
