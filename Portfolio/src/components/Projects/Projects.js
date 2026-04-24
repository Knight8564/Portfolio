import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import asean from "../../Assets/Projects/ai.certificate.png";
import unoct from "../../Assets/Projects/unoct.png";
import dlc from "../../Assets/Projects/dlc.png";
import chatify from "../../Assets/Projects/chatify.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asean}
              isBlog={false}
              title="AI Ready ASEAN"
              description="Successfully completed the 'Hour of Code' Training under the ASEAN Foundation, supported by Google.org, focusing on digital literacy and AI readiness."
              ghLink="https://www.aseanfoundation.org/"
              buttonText="View Program"
              buttonIcon={<FiExternalLink />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unoct}
              isBlog={false}
              title="UNOCT Initiative"
              description="Co-authoring a regional manual for SE Asia on establishing safety protocols and community guidelines for gaming ecosystems."
              ghLink="https://www.un.org/counterterrorism/en/events/call-young-gamers-help-build-safer-online-communities-violent-extremism-southeast-asia"
              buttonText="View UN Initiative"
              buttonIcon={<FiExternalLink />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dlc}
              isBlog={false}
              title="DLC Program"
              description="Pilot participant focused on educating moderators on PCVE and digital safety within online communities."
              ghLink="https://www.dlcleadership.org"
              buttonText="View Program"
              buttonIcon={<FiExternalLink />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="Student Login"
              description="CPE Lab 3.3 focused on secure authentication and session logic."
              ghLink="https://github.com/Knight8564/lab-3.3-"
              buttonText="GitHub"
              buttonIcon={<BsGithub />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Student Enrollment Portal"
              description="CPE Lab 3.2 specialized in data management and enrollment forms."
              ghLink="https://github.com/Knight8564/lab-2.3-dashboard"
              buttonText="GitHub"
              buttonIcon={<BsGithub />}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

