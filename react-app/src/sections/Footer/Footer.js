import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md="6" className="d-flex align-items-end">
            <p className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              efficitur feugiat tortor at cursus. Suspendisse non arcu odio.
              Morbi sapien nibh, eleifend eu malesuada ut, congue bibendum
              neque. Mauris faucibus.
            </p>
          </Col>
          <Col md="6" className="text-right">
            <h4>Contato</h4>
            <p>user@dominio.com</p>
            <p>(21) 9999-9999</p>
            <p>Rua José das Couves, 343. Ramos - Rio de Janeiro</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
