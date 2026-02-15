import React from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import { selectProjects, selectMainProjects } from "../app/projectsSlice";
// Router
import { Link } from "react-router-dom";
// Icons (kept for possible future use)
// import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

// #region component
const Projects = () => {
  const theme = useSelector(selectMode);
  const projects = useSelector(selectProjects);
  const mainProjects = useSelector(selectMainProjects);
  let content;

  if (projects.length === 0) {
    // still initializing or no projects defined
    content = (
      <Container className="d-flex">
        <Loading />
      </Container>
    );
  } else {
    content = (
      <>
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {mainProjects.map((element) => (
            <Col key={element.id}>
              <ProjectCard
                image={element.image}
                name={element.name}
                description={element.description}
                url={element.html_url}
                demo={element.homepage}
              />
            </Col>
          ))}
        </Row>
        {projects.length > mainProjects.length && (
          <Container className="text-center mt-5">
            <Link to="/All-Projects">
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
              >
                All Projects
              </Button>
            </Link>
          </Container>
        )}
      </>
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
