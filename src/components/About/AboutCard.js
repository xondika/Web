import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Patrick Ondika.</span>
            <br />
            I have completed a computer Science Master’s programme in Computer
            Scence at Masaryk University and I’m currently pursuing a PhD.
            <br />
            <br />
            Apart from coding, I love
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Strategy and Card Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
