import React from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Title from "./Title";
// Config
import { skillData, resume } from "../config";

// Group skills by category, preserving order of first appearance
const groupedSkills = skillData.reduce((acc, skill) => {
  const cat = skill.category || "Other";
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(skill);
  return acc;
}, {});

const categories = Object.keys(groupedSkills);

// #region component
const Skills = () => {
  const theme = useSelector(selectMode);
  const [activeCategory, setActiveCategory] = React.useState(categories[0]);

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Skills"} />
          </Container>

          <Tab.Container
            activeKey={activeCategory}
            onSelect={(k) => setActiveCategory(k)}
          >
            <Nav
              variant="pills"
              className="justify-content-center flex-wrap gap-2 mt-3 mb-4"
            >
              {categories.map((cat) => (
                <Nav.Item key={cat}>
                  <Nav.Link
                    eventKey={cat}
                    style={{
                      border:
                        theme === "light"
                          ? "1px solid rgba(0,0,0,0.2)"
                          : "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "2rem",
                      padding: "0.35rem 1rem",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color:
                        activeCategory === cat
                          ? theme === "light"
                            ? "#fff"
                            : "#000"
                          : theme === "light"
                            ? "#000"
                            : "#fff",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {cat}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Tab.Content>
              {categories.map((cat) => (
                <Tab.Pane eventKey={cat} key={cat}>
                  <Row className="mt-3 align-items-center justify-content-center">
                    {groupedSkills[cat].map((skills) => (
                      <Col
                        xs={4}
                        sm={3}
                        md={2}
                        key={skills.id}
                        className="my-3"
                      >
                        <figure>
                          {skills.skill}
                          <figcaption>{skills.name}</figcaption>
                        </figure>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>

          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Skills;
