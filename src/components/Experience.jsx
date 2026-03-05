import React from "react";
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { workExperience } from "../config";

// #region styled-components
const StyledExperience = styled.section`
  .timeline {
    position: relative;
    padding-left: 2rem;
  }

  .timeline::before {
    content: "";
    position: absolute;
    left: 0.6rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    background: var(--bs-primary);
    opacity: 0.4;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 2.5rem;
  }

  .timeline-item:last-child {
    margin-bottom: 0;
  }

  .timeline-dot {
    position: absolute;
    left: -2rem;
    top: 0.4rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--bs-primary);
    border: 2px solid var(--bs-primary);
    transform: translateX(0.1rem);
  }

  .exp-card {
    border: 1px solid
      ${({ theme }) =>
        theme.name === "light"
          ? "rgba(13, 110, 253, 0.25)"
          : "rgba(13, 110, 253, 0.35)"};
    border-radius: 0.5rem;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(13, 110, 253, 0.04)"
        : "rgba(13, 110, 253, 0.08)"};
    padding: 1.25rem 1.5rem;
    transition: box-shadow 0.2s ease;
  }

  .exp-card:hover {
    box-shadow: 0 4px 16px
      ${({ theme }) =>
        theme.name === "light"
          ? "rgba(13, 110, 253, 0.12)"
          : "rgba(13, 110, 253, 0.2)"};
  }

  .company-link {
    color: var(--bs-primary);
    text-decoration: none;
    font-weight: 700;
    font-size: 1.15rem;
  }

  .company-link:hover {
    text-decoration: underline;
  }

  .role-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
  }

  .period-badge {
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.65;
    white-space: nowrap;
  }

  ul.achievements {
    margin: 0.75rem 0 0;
    padding-left: 1.2rem;
    font-size: 0.95rem;
    line-height: 1.65;
  }

  ul.achievements li {
    margin-bottom: 0.35rem;
  }

  @media (max-width: 576px) {
    .timeline {
      padding-left: 1.5rem;
    }
    .timeline-dot {
      left: -1.5rem;
    }
  }
`;
// #endregion

// #region component
const Experience = () => {
  const theme = useSelector(selectMode);

  return (
    <Element name={"Experience"} id="experience">
      <StyledExperience className="section" theme={{ name: theme }}>
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Experience"} />
          </Container>
          <Row className="mt-5 justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <div className="timeline">
                {workExperience.map((job) => (
                  <div key={job.id} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="exp-card">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1">
                        <div>
                          {job.url ? (
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="company-link"
                            >
                              {job.company}
                            </a>
                          ) : (
                            <span className="company-link">{job.company}</span>
                          )}
                          <div className="role-title">{job.role}</div>
                        </div>
                        <span className="period-badge">{job.period}</span>
                      </div>
                      <ul className="achievements">
                        {job.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </StyledExperience>
    </Element>
  );
};
// #endregion

export default Experience;
