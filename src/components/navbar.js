
import React from "react"
import {Navbar, Nav} from "react-bootstrap"
import Helmet from "react-helmet"
import 'bootstrap/dist/css/bootstrap.css';

export default () => 
  <Navbar bg='dark' variant='dark' style={{height: '10vh', width: '100%'}}>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Tejus Mathew</title>
    </Helmet>
    <Navbar.Brand href="/">Tejus Mathew</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/coursework">Coursework</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/maps">Visitor Map</Nav.Link>
    </Nav>
  </Navbar>
