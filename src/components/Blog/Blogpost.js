import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import marked from "marked";
import ReactMarkdown from "react-markdown";

function Blogpost() {
  const [text, setText] = useState("");

  const path = require("./volleyball.md");

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((t) => {
        setText(t);
      });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <p style={{ color: "white", textAlign: "justify", fontSize: 18 }}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </p>
      </Container>
    </Container>
  );
}

export default Blogpost;
