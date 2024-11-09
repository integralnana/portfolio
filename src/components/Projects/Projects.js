import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Projects.css";

const ProjectCard = ({ project, onClick, index }) => (
  <div
    className="card h-100 project-card fade-in"
    style={{ animationDelay: `${index * 0.3}s` }}
    onClick={onClick}
  >
    <div className="project-year">{project.year}</div>
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
);

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <div className="image-gallery">
      <div className="image-container">
        <div className="main-image" onClick={toggleFullscreen}>
          <img
            src={images[selectedImage]}
            alt={`Screenshot ${selectedImage + 1}`}
          />
        </div>
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${selectedImage === index ? "active" : ""}`}
            onClick={() => setSelectedImage(index)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={toggleFullscreen}>
          <img
            src={images[selectedImage]}
            alt={`Fullscreen ${selectedImage + 1}`}
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const projectList = [
    {
      name: "Thesis Project",
      year: "Jul 2024 - Present",
      description: "Developed an application for sharing product purchases.",
      content:
        "• Developed a mobile application using Flutter and Firebase for users to share product purchases.<br /><br />• Integrated Google Maps API to provide location-based services and enhance user experience.<br /><br />• Implemented real-time database and authentication using Firebase, ensuring data security and user management.<br /><br />• Built an admin dashboard using React for managing users, products, and transactions.<br /><br />• https://github.com/integralnana/Project_Mobileapp.git",
      skills: ["Flutter", "Firebase", "React", "Google Maps API"],
      images: [
        "../Project_pics/p_home.png",
        "../Project_pics/p_Login.png",
        "../Project_pics/p_sharescreen.png",
        "../Project_pics/p_createpost.png",
        "../Project_pics/p_chat.png",
      ],
    },
    {
      name: "Food Recommendation App",
      year: "Jan 2024 - Mar 2024",
      description: "Software Engineer Class Project.",
      content:
        "• Played a key role as the primary coder in a team-based project for a Software Engineer course.<br /><br />• Responsible for front-end development using Flutter Framework to create interactive and interfaces.<br /><br />• Implementing and maintaining back-end functionality using PHP and MySQL to manage and store data efficiently.",
      skills: ["Flutter", "HTML", "CSS", "PHP", "MySQL"],
      images: [
        "../Project_pics/f_splash.png",
        "../Project_pics/f_home.png",
        "../Project_pics/f_login.png",
        "../Project_pics/f_register.png",
        "../Project_pics/f_ins.png",
        "../Project_pics/f_addfood.png",
        "../Project_pics/f_search.png",
        "../Project_pics/f_searching.png",
        "../Project_pics/f_post.png",
      ],
    },
    {
      name: "Webboard Development",
      year: "Jul 2023 - Nov 2023",
      description: "Web Application Development CLASS.",
      content:
        "• Designed and developed a responsive website using HTML, CSS, and JavaScript to enhance user experience across devices.<br /><br />• Implemented user authentication and data handling with PHP, ensuring secure access and interaction.<br /><br />• Managed data retrieval and storage efficiently with MySQL, supporting dynamic content and user data management.",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      images: [
        "../Project_pics/w_index.png",
        "../Project_pics/w_login.png",
        "../Project_pics/w_register.png",
        "../Project_pics/w_createpost.png",
        "../Project_pics/w_post.png",
        "../Project_pics/w_postcomment.png",
      ],
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
    setSelectedProject(null);
  };

  const createContentWithLinks = (content) =>
    content.split("<br />").map((line, index) => {
      const githubLinkPattern = /(https?:\/\/[^\s]+)/g;
      const parts = line.split(githubLinkPattern);
      return (
        <p key={index}>
          {parts.map((part, i) =>
            githubLinkPattern.test(part) ? (
              <a href={part} target="_blank" rel="noopener noreferrer" key={i}>
                {part}
              </a>
            ) : (
              part
            )
          )}
        </p>
      );
    });

  return (
    <div className="projects-section mt-5">
      <div className="project-columns">
        <div className="center-divider"></div>
        {projectList.map((project, index) => (
          <div className="project-row" key={index}>
            <ProjectCard
              project={project}
              onClick={() => handleShow(project)}
              index={index}
            />
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <>
              <ImageGallery images={selectedProject.images} />
              <div className="mt-4">
                {createContentWithLinks(selectedProject.content)}
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
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Projects;
