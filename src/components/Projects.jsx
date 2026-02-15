import React from "react";
// Styles
import styled, { keyframes } from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import { selectProjects } from "../app/projectsSlice";
// Router
import { Link } from "react-router-dom";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

// #region styled-components
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledCarouselRow = styled(Row)`
  animation: ${fadeIn} 0.5s ease-in-out;
`;
// #endregion

// #region component
const Projects = () => {
  const theme = useSelector(selectMode);
  const projects = useSelector(selectProjects);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  let content;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (projects.length === 0) {
    // still initializing or no projects defined
    content = (
      <Container className="d-flex">
        <Loading />
      </Container>
    );
  } else if (projects.length <= 3) {
    // Show grid layout for 3 or fewer projects
    content = (
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {projects.map((element) => (
          <Col key={element.id}>
            <ProjectCard
              image={element.image}
              name={element.name}
              description={element.description}
              url={element.html_url}
            />
          </Col>
        ))}
      </Row>
    );
  } else {
    // Show carousel for more than 3 projects
    const visibleProjects = [
      projects[(currentIndex - 1 + projects.length) % projects.length],
      projects[currentIndex],
      projects[(currentIndex + 1) % projects.length],
    ];

    content = (
      <div className="d-flex flex-column align-items-center">
        <StyledCarouselRow
          xs={1}
          md={2}
          lg={3}
          className="g-4 justify-content-center w-100"
        >
          {visibleProjects.map((element) => (
            <Col key={element.id}>
              <ProjectCard
                image={element.image}
                name={element.name}
                description={element.description}
                url={element.html_url}
              />
            </Col>
          ))}
        </StyledCarouselRow>
        <Container className="text-center mt-4">
          <Button
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            onClick={handlePrevious}
            className="me-3"
          >
            <Icon icon="ic:round-arrow-back" />
          </Button>
          <span className="mx-3" style={{ fontSize: "1.1rem" }}>
            {currentIndex + 1} / {projects.length}
          </span>
          <Button
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            onClick={handleNext}
            className="ms-3"
          >
            <Icon icon="ic:round-arrow-forward" />
          </Button>
        </Container>
        <Container className="text-center mt-4">
          <Link to="/All-Projects">
            <Button
              size="lg"
              variant={theme === "light" ? "outline-dark" : "outline-light"}
            >
              View All Projects
            </Button>
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Projects"} />
          </Container>
          {content}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Projects;
