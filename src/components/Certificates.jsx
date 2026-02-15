import React from "react";
// Components
import { Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";
// Config
import { certificates } from "../config";

const Certificates = () => {
  return (
    <Element name="Certificates" id="certificates">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size="h2" text="Certificates" />
          </Container>
          <Row className="mt-3">
            {certificates.map((cert, idx) => (
              <Col xs={12} md={6} lg={4} key={idx} className="mb-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-reset"
                >
                  <div className="certificate-card p-3 h-100 border rounded">
                    <h5>{cert.title}</h5>
                    <p className="mb-0">{cert.issuer}</p>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Element>
  );
};

export default Certificates;
