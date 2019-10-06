import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, NavbarBrand, Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

export default () => 
    <Navbar bg='dark' variant='dark' style={{height: '10vh', width: '100%'}}>
    <Navbar.Brand href="/">Tejus Mathew</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">Projects</Nav.Link>
      <Nav.Link href="/">Visitor Map</Nav.Link>
    </Nav>
  </Navbar>
