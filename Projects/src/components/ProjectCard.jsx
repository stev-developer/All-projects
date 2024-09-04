import React from "react";
import { Card, Button } from "antd";
import "./ProjectCard.css"; // Ensure you have this CSS file for styling

const ProjectCard = ({ title, image, githubLink, liveDemoLink }) => {
  return (
    <Card
      bordered={false}
      hoverable
      className="details-container color-container"
      cover={<img src={image} alt={title} className="project-img" />}
      style={{
        width: "100%",
        borderRadius: "2rem",
        background: "rgb(250, 250, 250)",
        borderColor: "rgb(163, 163, 163)",
      }}
    >
      <h2 className="experience-sub-title project-title">{title}</h2>
      <div className="btn-container">
        {githubLink && (
          <Button
            className="btn btn-color-2 project-btn"
            onClick={() => window.open(githubLink, "_blank")}
          >
            Github
          </Button>
        )}
        {liveDemoLink && (
          <Button
            className="btn btn-color-2 project-btn"
            onClick={() => window.open(liveDemoLink, "_blank")}
          >
            Live Demo
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
