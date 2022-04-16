import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../images/logo2.png';
import {MdOutlineFastfood} from 'react-icons/md';

const Heade = () => {
  return (

      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/home'>
              <img height='30px' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link  as={Link} to='/menu'><MdOutlineFastfood className="text-dark fw-bold mb-1"></MdOutlineFastfood></Nav.Link>
              <Nav.Link className="fw-bold ms-3" as={Link} to='/login'>Login</Nav.Link>
              <Nav.Link className="btn btn-danger rounded-pill fw-bold ms-4" as={Link} to='/signup'>
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Heade;
