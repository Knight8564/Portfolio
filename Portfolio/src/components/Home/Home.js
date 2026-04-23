import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord, FaFacebook } from "react-icons/fa";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JOHN FREDERICK BULACAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Knight8564"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <div
                  onClick={() => {
                    setModalMessage("I was wrongfully banned last year by Meta, sorry :(");
                    setModalShow(true);
                  }}
                  className="icon-colour home-social-icons"
                  style={{ cursor: "pointer" }}
                >
                  <FaFacebook />
                </div>
              </li>
              <li className="social-icons">
                <div
                  onClick={() => {
                    setModalMessage("Coming soon, just have no time to make one (or forget it a lot XD)");
                    setModalShow(true);
                  }}
                  className="icon-colour home-social-icons"
                  style={{ cursor: "pointer" }}
                >
                  <FaLinkedinIn />
                </div>
              </li>
              <li className="social-icons">
                <div
                  onClick={() => {
                    setModalMessage("I chose not to make an account, there's a lot of drama in the world already :P");
                    setModalShow(true);
                  }}
                  className="icon-colour home-social-icons"
                  style={{ cursor: "pointer" }}
                >
                  <AiOutlineTwitter />
                </div>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kn1ghtie_?igsh=cmJseXl5NWp5YzJh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discordapp.com/users/728785186459877448"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
            <Modal
              show={modalShow}
              onHide={() => setModalShow(false)}
              centered
              style={{
                "--bs-modal-bg": "#000428",
                "--bs-modal-border-color": "#00f2ff",
              }}
            >
              <Modal.Body style={{ backgroundColor: "#000428", color: "#00f2ff", border: "2px solid #00f2ff", borderRadius: "10px" }}>
                <p>{modalMessage}</p>
                <Button variant="outline-info" onClick={() => setModalShow(false)}>
                  Close
                </Button>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
