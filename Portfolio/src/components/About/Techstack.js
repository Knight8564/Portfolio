import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiHtml5, SiCss3 } from "react-icons/si";
import C from "../../Assets/TechIcons/C++.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={4} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={4} className="tech-icons">
        <img src={ReactIcon} alt="React.js" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <SiHtml5 fontSize={"24px"} />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <SiCss3 fontSize={"24px"} />
        <div className="tech-icons-text">CSS3</div>
      </Col>
    </Row>
  );
}

export default Techstack;


