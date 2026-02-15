import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { aboutMeIntro, aboutMeSections } from "../config";

// #region styled-components
const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
    line-height: 1.8;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
  .accordion-section {
    margin-bottom: 1.5rem;
    border: 1px solid var(--bs-primary);
    border-radius: 0.375rem;
    overflow: hidden;
  }
  .accordion-header {
    padding: 1rem;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(13, 110, 253, 0.1)"
        : "rgba(13, 110, 253, 0.2)"};
    cursor: pointer;
    user-select: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;
  }
  .accordion-header:hover {
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(13, 110, 253, 0.15)"
        : "rgba(13, 110, 253, 0.3)"};
  }
  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  .accordion-content.open {
    max-height: 500px;
    padding: 1rem;
  }
`;
// #endregion

// #region component
const propTypes = {
  avatar_url: PropTypes.string.isRequired,
};

const AboutMe = ({ avatar_url }) => {
  const [expanded, setExpanded] = React.useState({});

  const toggleSection = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"About Me"} />
          </Container>
          <Row className="align-items-start mt-5">
            <Col>
              <Container>
                <p>{aboutMeIntro}</p>
                {aboutMeSections.map((section) => (
                  <div key={section.id} className="accordion-section">
                    <div
                      className="accordion-header"
                      onClick={() => toggleSection(section.id)}
                    >
                      {section.title}
                    </div>
                    <div
                      className={`accordion-content ${
                        expanded[section.id] ? "open" : ""
                      }`}
                    >
                      <p style={{ marginBottom: 0 }}>{section.content}</p>
                    </div>
                  </div>
                ))}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle border border-primary-subtle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
};

AboutMe.propTypes = propTypes;
// #endregion

export default AboutMe;
