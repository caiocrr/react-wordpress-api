import React, { Component } from "react";
import { Container, Col, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
class Header extends Component {
  state = {};
  componentDidMount() {}
  componentWillUnmount() {}
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  scrollTo = () => {
    scroll.scrollTo(100);
  };
  scrollMore = () => {
    scroll.scrollMore(100);
  };
  handleSetActive = to => {
    console.log(to);
  };
  render() {
    return (
      <Navbar
        style={{ backgroundColor: "#e0e0e0", opacity: 0.9 }}
        className="dan-header"
        collapseOnSelect
        expand="lg"
        // bg="light"
        // variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#">React & WP API</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav> */}
            <Nav className="mr-auto" />
            <Nav className="">
              <Link
                activeClass="dan-active-menu"
                to="sectionA"
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
                onSetActive={this.handleSetActive}
                className="nav-link"
                href="#"
              >
                Section A
              </Link>
              <Link
                activeClass="dan-active-menu"
                to="sectionB"
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
                onSetActive={this.handleSetActive}
                className="nav-link"
                href="#"
              >
                Section B
              </Link>
              <Link
                activeClass="dan-active-menu"
                to="sectionC"
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
                onSetActive={this.handleSetActive}
                className="nav-link"
                href="#"
              >
                Section C
              </Link>
              <Link
                activeClass="dan-active-menu"
                to="sectionD"
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
                onSetActive={this.handleSetActive}
                className="nav-link"
                href="#"
              >
                Section D
              </Link>
              <Link
                activeClass="dan-active-menu"
                to="sectionE"
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
                onSetActive={this.handleSetActive}
                className="nav-link"
                href="#"
              >
                Section E
              </Link>
            </Nav>
            {/* <Nav>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
