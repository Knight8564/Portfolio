import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiOctave, SiSimpleanalytics, SiArduino, SiOpera } from "react-icons/si";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOctave fontSize={"24px"} />
        <div className="tech-icons-text">MATLAB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSimpleanalytics fontSize={"24px"} />
        <div className="tech-icons-text">Minitab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino fontSize={"24px"} />
        <div className="tech-icons-text">Arduino IDE</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpera fontSize={"24px"} />
        <div className="tech-icons-text">Opera Browser</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
