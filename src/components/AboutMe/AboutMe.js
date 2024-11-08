import React, { useState } from "react";
import { Modal } from "react-bootstrap";
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
import { ZoomIn, ZoomOut } from "lucide-react";
import "./AboutMe.css";

const AboutMe = () => {
  const [showTranscript, setShowTranscript] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <RiFirebaseFill />, name: "Firebase" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  const education = [
    {
      year: "Jul 2021 - Present",
      title: "Bachelor's Degree in Electronics Engineering (Computer)",
      institution: "King Mongkut's University of Technology North Bangkok",
    },
    {
      year: "2017 - 2020",
      title: "High School Diploma",
      institution: "Saohai Wimolwitthayanukul School",
    },
  ];

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div className="about-container">
      <div className="profile-section">
        <div className="profile-image-container">
          <img src="../me.jpg" alt="Myself" className="profile-image" />
        </div>
        <div className="profile-info">
          <h1>Nawaphol Srichuwong</h1>
          <h3>Front-End Developer</h3>
          <p>
            I am a fourth-year student with a keen interest in software
            development with a passion for frontend and web development. I am
            highly motivated and possess a strong desire to learn, constantly
            seeking out new knowledge and opportunities for growth.
          </p>
          <div className="profile-buttons">
            <button onClick={() => setShowCV(true)} className="main-button">
              View Resume
            </button>
            <button
              onClick={() => setShowTranscript(true)}
              className="alt-button"
            >
              View Transcript
            </button>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h4>Technical Skills</h4>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="education-section">
        <h4>Education</h4>
        {education.map((item, index) => (
          <div
            key={index}
            className={`education-item ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <div className="education-year">{item.year}</div>
            <div className="education-info">
              <h5>{item.title}</h5>
              <p>{item.institution}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        show={showCV}
        onHide={() => {
          setShowCV(false);
          resetZoom();
        }}
        centered
        className="custom-modal modal-fade"
      >
        <Modal.Header closeButton>
          <Modal.Title>My Resume</Modal.Title>
          <div className="zoom-controls">
            <button onClick={handleZoomOut} className="zoom-button">
              <ZoomOut className="w-4 h-4" />
            </button>
            <button onClick={handleZoomIn} className="zoom-button">
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div
            className="image-container"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src="../MyResume.jpg"
              alt="My Resume"
              className="modal-image"
              onClick={resetZoom}
            />
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showTranscript}
        onHide={() => {
          setShowTranscript(false);
          resetZoom();
        }}
        centered
        className="custom-modal modal-fade"
      >
        <Modal.Header closeButton>
          <Modal.Title>My Transcript</Modal.Title>
          <div className="zoom-controls">
            <button onClick={handleZoomOut} className="zoom-button">
              <ZoomOut className="w-4 h-4" />
            </button>
            <button onClick={handleZoomIn} className="zoom-button">
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div
            className="image-container"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src="../MyTranscript.jpg"
              alt="My Transcript"
              className="modal-image"
              onClick={resetZoom}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AboutMe;
