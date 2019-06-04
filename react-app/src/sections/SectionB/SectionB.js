import React, { Component } from "react";
import { Container, Col, Row, Card, CardDeck } from "react-bootstrap";
import "./style.css";
import TitleSection from "../../components/TitleSection";
import DescSection from "../../components/DescSection";
class SectionB extends Component {
  state = {};
  render() {
    return (
      <div className="dan-section bg-secondary pt-5 pb-5" id="sectionB">
        <Container>
          <Row>
            <TitleSection text="Section B" />
            <DescSection text="Descrição Section B. Aqui se encontra um resumo do que a seção apresenta" />

            <CardDeck className="mt-5 w-100">
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300/09f/fff.png"
                />
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300/09f/fff.png"
                />
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300/09f/fff.png"
                />
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SectionB;
