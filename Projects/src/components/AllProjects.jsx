import React, { useState } from "react";
import { Tabs, Row, Col, Button } from "antd";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import ProjectCard from "./ProjectCard";

const { TabPane } = Tabs;

const projectsData = {
  all: [
    {
      id: 1,
      title: "Calculator",

      image: "./calculator.png",
      githubLink: "https://github.com/stev-developer/calculator",
      liveDemoLink: "https://stev-developer.github.io/calculator/",
    },
    {
      id: 2,
      title: "Blurry-Loading",

      image: "./b.png",
      githubLink: "https://github.com/stev-developer/Blurry-Loading",
      liveDemoLink: "https://stev-developer.github.io/Blurry-Loading/",
    },
    {
      id: 3,
      title: "Weather-App",

      image: "./w.png",
      githubLink: "https://github.com/stev-developer/Weather-App",
      liveDemoLink: "https://stev-developer.github.io/Weather-App/",
    },
    {
      id: 4,
      title: "tic-tac-toe game",

      image: "./t.png",
      githubLink: "https://github.com/stev-developer/tic-tac-toe",
      liveDemoLink: "https://stev-developer.github.io/tic-tac-toe/",
    },
    {
      id: 5,
      title: "GetAdvice Application",

      image: "./ad.jpeg",
      githubLink: "https://github.com/stev-developer/GetAdvice",
      liveDemoLink: "https://stev-developer.github.io/GetAdvice/",
    },
    {
      id: 6,
      title: "Form-Validation",

      image: "./f.png",
      githubLink: "https://github.com/stev-developer/Form-Validation",
      liveDemoLink: "https://stev-developer.github.io/Form-Validation/",
    },
    {
      id: 7,
      title: "Calculator",

      image: "./qr.png",
      githubLink: "https://github.com/stev-developer/QR-code.REACT",
      liveDemoLink: "https://stev-developer.github.io/QR-code.REACT/",
    },
    {
      id: 8,
      title: "Text-To-Speech",

      image: "./text.png",
      githubLink: "https://github.com/stev-developer/Text-To-Speech",
      liveDemoLink: "https://stev-developer.github.io/Text-To-Speech/",
    },
    {
      id: 9,
      title: "Old-Protfolio",

      image: "./old.jpeg",
      githubLink: "https://github.com/stev-developer/My-Website",
      liveDemoLink: "https://stev-developer.github.io/My-Website/",
    },
    {
      id: 10,
      title: "New-Protfolio",

      image: "./new.jpeg",
      githubLink: "https://github.com/stev-developer/calculator",
      liveDemoLink: "https://new-portfolio1-kappa.vercel.app/",
    },
    {
      id: 11,
      title: "Fanta-LandingPage",

      image: "./fanta.png",
      githubLink: "https://github.com/jananisree96/Fanta",
      liveDemoLink: "https://fanta-self.vercel.app/",
    },
    {
      id: 12,
      title: "3D-LandingPage",

      image: "./orange.png",
      githubLink: "https://github.com/stev-developer/3D-Website",
      liveDemoLink: "https://3-d-website-mu-two.vercel.app/",
    },
    {
      id: 13,
      title: "Restaurant-Landing",

      image: "./restaurant.png",
      githubLink: "https://github.com/jananisree96/Restaurant-website",
      liveDemoLink: "https://restaurant-site-js.netlify.app/",
    },
    {
      id: 14,
      title: "Aiyo-LandingPage",

      image: "./aiyo.png",
      githubLink: "https://github.com/ebinjoe/newAiyo",
      liveDemoLink: "https://new-aiyo-delta.vercel.app/",
    },
    {
      id: 15,
      title: "health-dashboard",

      image: "./free.png",
      githubLink: "https://github.com/geospatialexplorer/dashboard",
      liveDemoLink: "https://health-dashboard-gold.vercel.app/",
    },
  ],

  landing: [
    {
      id: 11,
      title: "Fanta-LandingPage",

      image: "./fanta.png",
      githubLink: "https://github.com/jananisree96/Fanta",
      liveDemoLink: "https://fanta-self.vercel.app/",
    },
    {
      id: 12,
      title: "3D-LandingPage",

      image: "./orange.png",
      githubLink: "https://github.com/stev-developer/3D-Website",
      liveDemoLink: "https://3-d-website-mu-two.vercel.app/",
    },
    {
      id: 13,
      title: "Restaurant-Landing",

      image: "./restaurant.png",
      githubLink: "https://github.com/jananisree96/Restaurant-website",
      liveDemoLink: "https://restaurant-site-js.netlify.app/",
    },
    {
      id: 14,
      title: "Aiyo-LandingPage",

      image: "./aiyo.png",
      githubLink: "https://github.com/ebinjoe/newAiyo",
      liveDemoLink: "https://new-aiyo-delta.vercel.app/",
    },
  ],
  FreeLance: [
    {
      id: 14,
      title: "Aiyo-LandingPage",

      image: "./aiyo.png",
      githubLink: "https://github.com/ebinjoe/newAiyo",
      liveDemoLink: "https://new-aiyo-delta.vercel.app/",
    },
    {
      id: 15,
      title: "health-dashboard",

      image: "./free.png",
      githubLink: "https://github.com/geospatialexplorer/dashboard",
      liveDemoLink: "https://health-dashboard-gold.vercel.app/",
    },
    // More e-commerce projects...
  ],
  learning: [
    {
      id: 1,
      title: "Calculator",

      image: "./calculator.png",
      githubLink: "https://github.com/stev-developer/calculator",
      liveDemoLink: "https://stev-developer.github.io/calculator/",
    },
    {
      id: 2,
      title: "Blurry-Loading",

      image: "./b.png",
      githubLink: "https://github.com/stev-developer/Blurry-Loading",
      liveDemoLink: "https://stev-developer.github.io/Blurry-Loading/",
    },
    {
      id: 3,
      title: "Weather-App",

      image: "./w.png",
      githubLink: "https://github.com/stev-developer/Weather-App",
      liveDemoLink: "https://stev-developer.github.io/Weather-App/",
    },
    {
      id: 4,
      title: "tic-tac-toe game",

      image: "./t.png",
      githubLink: "https://github.com/stev-developer/tic-tac-toe",
      liveDemoLink: "https://stev-developer.github.io/tic-tac-toe/",
    },
    {
      id: 5,
      title: "GetAdvice Application",

      image: "./ad.jpeg",
      githubLink: "https://github.com/stev-developer/GetAdvice",
      liveDemoLink: "https://stev-developer.github.io/GetAdvice/",
    },
    {
      id: 6,
      title: "Form-Validation",

      image: "./f.png",
      githubLink: "https://github.com/stev-developer/Form-Validation",
      liveDemoLink: "https://stev-developer.github.io/Form-Validation/",
    },
    {
      id: 7,
      title: "Calculator",

      image: "./qr.png",
      githubLink: "https://github.com/stev-developer/QR-code.REACT",
      liveDemoLink: "https://stev-developer.github.io/QR-code.REACT/",
    },
    {
      id: 8,
      title: "Text-To-Speech",

      image: "./text.png",
      githubLink: "https://github.com/stev-developer/Text-To-Speech",
      liveDemoLink: "https://stev-developer.github.io/Text-To-Speech/",
    },
    {
      id: 9,
      title: "Old-Protfolio",

      image: "./old.jpeg",
      githubLink: "https://github.com/stev-developer/My-Website",
      liveDemoLink: "https://stev-developer.github.io/My-Website/",
    },
  ],
};

const AllProjects = () => {
  const [sortedProjects, setSortedProjects] = useState(projectsData.all);
  const [sortOrder, setSortOrder] = useState("old"); // Default to 'new'

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "new" ? "old" : "new";
    setSortOrder(newSortOrder);

    const sortedData = [...projectsData.all].sort((a, b) => {
      return newSortOrder === "new" ? b.id - a.id : a.id - b.id;
    });

    setSortedProjects(sortedData);
  };

  const renderCards = (projects) => (
    <Row gutter={[16, 16]}>
      {projects.map((project, index) => (
        <Col xs={24} sm={12} md={8} lg={6} key={index}>
          <ProjectCard
            title={project.title}
            image={project.image}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
          />
        </Col>
      ))}
    </Row>
  );

  return (
    <div style={{ padding: "20px" }}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h2>All Projects</h2>
        <Button
          type="dashed"
          onClick={toggleSortOrder}
          icon={
            sortOrder === "new" ? (
              <SortDescendingOutlined />
            ) : (
              <SortAscendingOutlined />
            )
          }
        >
          {sortOrder === "new" ? "Old Projects " : "New Projects"}
        </Button>
      </div>

      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          {renderCards(sortedProjects)}
        </TabPane>
        <TabPane tab="Landing Pages" key="2">
          {renderCards(projectsData.landing)}
        </TabPane>
        <TabPane tab="FreeLance" key="3">
          {renderCards(projectsData.FreeLance)}
        </TabPane>
        <TabPane tab="Learning" key="4">
          {renderCards(projectsData.learning)}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AllProjects;
