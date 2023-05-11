import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Created By{" "}
            <a
              href="https://www.linkedin.com/in/gaurav-munjewar/"
              target="_blank"
              rel="noreferrer"
            >
              Gaurav Munjewar
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <a
              href="https://github.com/gauravmnjwr/CyberShop_MERN"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </Col>

          <Col className="text-center py-3">
            Drop a Mail:{" "}
            <a
              href="mailto:gauravmunjewar.work@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              gauravmunjewar.work@gmail.com
            </a>
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-3">Copyright &copy; CyberShop</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
