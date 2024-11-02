import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      name: "Webboard Development",
      description: "Web Application Development CLASS.",
      content:
        "• Designed and developed a responsive website using HTML, CSS, and JavaScript to enhance user experience across devices.<br /><br />• Implemented user authentication and data handling with PHP, ensuring secure access and interaction.<br /><br />• Managed data retrieval and storage efficiently with MySQL, supporting dynamic content and user data management.",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      name: "Project Coder",
      description: "Software Engineer Class Project.",
      content:
        "• Played a key role as the primary coder in a team-based project for a Software Engineer course.<br /><br />• Responsible for front-end development using PHP to create interactive and interfaces.<br /><br />• Implementing and maintaining back-end functionality using MySQL to manage and store data efficiently.",
      skills: ["HTML", "CSS", "PHP", "MySQL"],
    },
    {
      name: "Thesis Project",
      description: "Developed an application for sharing product purchases.",
      content:
        "• Developed a mobile application using Flutter and Firebase for users to share product purchases.<br /><br />• Integrated Google Maps API to provide location-based services and enhance user experience.<br /><br />• Implemented real-time database and authentication using Firebase, ensuring data security and user management.<br /><br />• Built an admin dashboard using React for managing users, products, and transactions.<br /><br />• https://github.com/integralnana/Project_Mobileapp.git",
      skills: ["Flutter", "Firebase", "React", "Google Maps API"],
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <div className="projects-section mt-5">
      <div className="row">
        {projectList.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card h-100 project-card"
              onClick={() => handleShow(project)}
            >
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <div className="skills-container">
                  <div className="skills-list">
                    {project.skills.map((tech, index) => (
                      <div className="skills-box" key={index}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} className="modal-custom">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject ? (
            <>
              <div>
                {selectedProject.content.split("<br />").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className="skills-container">
                <div className="skills-list">
                  {selectedProject.skills.map((tech, index) => (
                    <div className="skills-box" key={index}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projects;
