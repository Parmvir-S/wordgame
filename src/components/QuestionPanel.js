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
import { useEffect, useLayoutEffect, useState } from "react";
import { db } from "../db/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import socket from "../utils/socketConfig";
import {categories, randomCategories} from "../assets/categories/categories";
import { motion } from "framer-motion";

function QuestionPanel({ room }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [questions, setQuestions] = useState("");
  const [questionCollection, setQuestionCollection] = useState("");


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
            socket.emit("send-questions", {
              topics: post.topics,
              room
            })
          }}
        >
          Select Topics
        </Button>
      </Card>
    );
  };

  useLayoutEffect(() => {
    socket.on("recieved-topics", (topics) => {
      setQuestions(topics);
    })
  }, [socket])

  return (
    <div className="questionPanel">
      <Container>
        <Row>
          <Col>
            <div
              className="questionDisplay"
              style={{ width: "100%", marginTop: "12%" }}
            >
              {questions.split(",").map((topic) => {
            return (
              <div 
                className="inputStyle" key={`topic` + Math.random(1)} 
                style={{ border: "0.1px solid grey", borderRadius: "2px"}}
              >
              <Form.Label id="topicLabel">{topic}</Form.Label>
              <Form.Control/>
              </div>
            )
          })}

            </div>
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
          <Col>
            <Button id="modalButton" variant="info" onClick={() => {
              socket.emit("send-questions", {
                topics: randomCategories(categories),
                room
              })
            }}>
              Random Topics
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
              addQuestionToDB();
              socket.emit("send-questions", {
                topics: questions,
                room
              })
              handleClose()
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
