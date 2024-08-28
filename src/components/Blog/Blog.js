import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import volleyball from "../../Assets/volleyball.jpg";
import { Router, Route } from "react-router-dom";

function Blog() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          This is where I&rsquo;m going to blurt out random nonsense. No
          promises that it will be informative or entertaining, but you can
          definitely get some insight into my mind.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volleyball}
              isBlog={true}
              title="How I started playing Volleyball"
              description="A month's experience of getting (really) into beach volleyball"
              ghLink="/blogs/volleyball"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
