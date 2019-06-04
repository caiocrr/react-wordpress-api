import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./style.css";
import TitleSection from "../../components/TitleSection";
import DescSection from "../../components/DescSection";
class SectionA extends Component {
  state = {};
  render() {
    return (
      <div className="dan-section pt-5 pb-5" id="sectionA">
        <Container>
          <Row>
            <TitleSection text="Section A" />
            <DescSection text="Descrição Section A. Aqui se encontra um resumo do que a seção apresenta" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default SectionA;
