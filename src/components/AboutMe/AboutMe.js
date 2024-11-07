import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./AboutMe.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaPython,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import { SiFlutter, SiMysql, SiPhp } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";

const AboutMe = () => {
  const [showTranscript, setShowTranscript] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const handleShowTranscript = () => setShowTranscript(true);
  const handleCloseTranscript = () => setShowTranscript(false);
  const handleShowCV = () => setShowCV(true);
  const handleCloseCV = () => setShowCV(false);

  return (
    <div className="about-me-section container-fluid">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img src="../me.jpg" alt="Myself" className="profile-image" />
        </div>
        <div className="col-md-8">
          <h1>Nawaphol Srichuwong</h1>
          <p>
            I am a fourth-year student with a keen interest in software
            development with a passion for frontend and web development. I am
            highly motivated and possess a strong desire to learn, constantly
            seeking out new knowledge and opportunities for growth.
          </p>
          <div className="cvtranrow">
            <div className="pointerText" onClick={handleShowCV}>
              My Resume
            </div>
            <div className="pointerText" onClick={handleShowTranscript}>
              My transcript
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h4>My Skills</h4>
          <ul className="skills-list">
            <li>
              <FaHtml5 /> HTML
            </li>
            <li>
              <FaCss3Alt /> CSS
            </li>
            <li>
              <FaJava /> Java
            </li>
            <li>
              <FaJsSquare /> JavaScript
            </li>
            <li>
              <FaReact /> React
            </li>
            <li>
              <FaGithub /> GitHub
            </li>
            <li>
              <SiFlutter /> Flutter
            </li>
            <li>
              <SiMysql /> MySql
            </li>
            <li>
              <RiFirebaseFill /> Firebase
            </li>
            <li>
              <SiPhp /> PHP
            </li>
            <li>
              <FaPython /> Python
            </li>
            <li>
              <FaFigma /> Figma
            </li>
          </ul>
        </div>
      </div>
      {/* Modal for Resume */}
      <Modal
        show={showCV}
        onHide={handleCloseCV}
        className="modal-custom"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>My Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fade-in-animation">
          <img src="../MyResume.jpg" alt="My Resume" className="resume-image" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCV}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for transcript */}
      <Modal
        show={showTranscript}
        onHide={handleCloseTranscript}
        className="modal-custom"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>My Transcript</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fade-in-animation">
          <img
            src="../MyTranscript.jpg"
            alt="My Transcript"
            className="transcript-image"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTranscript}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AboutMe;
