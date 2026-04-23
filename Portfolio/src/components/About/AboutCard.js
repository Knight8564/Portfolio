import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">John Frederick S. Bulacan</span>{" "}
            from <span className="purple">Manila, Philippines</span>.
            <br />
            I am currently a 3rd-year <span className="purple">Computer Engineering</span> student at the{" "}
            <span className="purple">Technological Institute of the Philippines (TIP) Manila</span>.
            <br />
            <br />
            Beyond the hardware and logic of my engineering studies, I serve as a{" "}
            <span className="purple">Community Moderator</span> for global games and content creators. I am also the{" "}
            <span className="purple">Esports Director</span> of our university's gaming organization, overseeing collegiate-level competitive operations.
            <br />
            <br />
            Most notably, I am a participant and co-author for the <span className="purple">UNOCT initiative</span>: Building Safer Online Gaming Communities in Southeast Asia. I am also a Pilot Participant for the DLC program, focusing on educating moderators about <span className="purple">PCVE</span> (Preventing and Countering Violent Extremism).
            <br />
            <br />
            My passion drives me to:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Competing in the gaming arena 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Moderating digital communities 🌐
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring emerging hobbies 🔬
            </li>
            <li className="about-activity">
              <ImPointRight /> Building my own path 🛤️
            </li>
          </ul>

          <p style={{ color: "rgb(0, 242, 255)" }}>
            "When young people help draft the community values, they feel a sense of ownership, making them more likely to defend those values against bad actors."{" "}
          </p>
          <footer className="blockquote-footer">John Frederick Bulacan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
