import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Card } from "react-bootstrap";

// #region styled-components
const StyledCard = styled.div`
  .card {
    height: var(--card-height);
    border: var(--border);
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) =>
      theme.name === "light" ? "" : "var(--bs-gray)"};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-img-container {
      height: 50%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      overflow: hidden;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
      }
    }

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;

      &:hover {
        color: ${({ theme }) =>
          theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) =>
        theme.name === "light" ? "" : "var(--bs-gray-dark)"};

      .card-link {
        color: ${({ theme }) =>
          theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};

        &:hover {
          color: var(--bs-primary);
        }
      }
    }

    &:hover {
      transform: scale(1.03);
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const ProjectCard = ({ description, imageUrl, name, url }) => {
  return (
    <StyledCard>
      <Card>
        <div
          className="card-img-container"
          style={{
            backgroundImage: imageUrl ? `url("${imageUrl}")` : "none",
            backgroundColor: "#f0f0f0",
          }}
        />
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={url}>
            {"Visit project "}
            <Icon icon="teenyicons:external-link-outline" />
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCard>
  );
};

ProjectCard.propTypes = propTypes;
// #endregion

export default ProjectCard;
