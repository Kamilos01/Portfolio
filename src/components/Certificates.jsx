import React from "react";
// Components
import { Element } from "react-scroll";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Title from "./Title";
// Config
import { certificates } from "../config";

const CertCard = ({ cert }) => {
  const cardBody = (
    <div
      className={`certificate-card p-3 h-100 border rounded d-flex flex-column justify-content-between${
        cert.url ? " certificate-card--linked" : ""
      }`}
    >
      <div>
        <h5 className="mb-1">{cert.title}</h5>
        <p className="mb-0 text-muted">{cert.issuer}</p>
      </div>
      {cert.url ? (
        <div className="mt-3">
          <Badge bg="secondary" className="certificate-badge">
            View Certificate ↗
          </Badge>
        </div>
      ) : (
        <div className="mt-3">
          <Badge
            bg="secondary"
            className="certificate-badge certificate-badge--muted opacity-50"
          >
            Not yet verified
          </Badge>
        </div>
      )}
    </div>
  );

  if (cert.url) {
    return (
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-reset h-100 d-block"
        aria-label={`View certificate: ${cert.title}`}
      >
        {cardBody}
      </a>
    );
  }

  return cardBody;
};

const Certificates = () => {
  return (
    <Element name="Certificates" id="certificates">
      <section className="section section--compact">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size="h2" text="Certificates" />
          </Container>
          <Row className="mt-3">
            {certificates.map((cert, idx) => (
              <Col xs={12} md={6} lg={4} key={idx} className="mb-4">
                <CertCard cert={cert} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Element>
  );
};

export default Certificates;
