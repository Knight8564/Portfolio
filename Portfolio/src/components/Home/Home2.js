import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Computer Engineering student who lives for the intersection of hardware and software. Whether I'm diagnosing a short-circuited motherboard or deploying a <b className="purple">React</b> app, I love the challenge of making complex systems work.
              <br />
              <br />
              I've spent my time mastering <b className="purple">C++</b>, <b className="purple">Python</b>, and <b className="purple">Node.js</b>, while specializing in engineering tools like <b className="purple">MATLAB</b> and <b className="purple">Cisco Packet Tracer</b>. I'm at home in both the terminal and the lab.
              <br />
              <br />
              My current mission involves <b className="purple">Network Engineering</b> and collaborating with the <b className="purple">UNOCT</b> to build safer, more inclusive online gaming communities.
              <br />
              <br />
              When I'm not coding or working on network protocols, you'll probably find me in the competitive mobile gaming scene or troubleshooting hardware—basically, if it has a circuit board or a ruleset, I'm interested.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
