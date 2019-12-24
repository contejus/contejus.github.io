import React from "react"
import resume from "../images/resume.png"
import github from "../images/github-logo.png"
import linkedin from "../images/linkedin-logo.png"
import email from "../images/email.png"
import SiteNavbar from "../components/navbar"
import {Button, Container, Jumbotron, Col, Row, ModalFooter} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

var link = "https://wallpapercave.com/wp/wp2943265.jpg"

const IndexPage = () => (
  <React.Fragment>
    <SiteNavbar>
    </SiteNavbar>
      <Jumbotron style={{background: "url(" + link + ")", borderRadius: '0px', backgroundSize: 'cover'}}>
        <Container style={{color: 'white'}}>
          <h1 class="display-4">Welcome</h1>
          <p>Here, you can view some of my projects, view my contact information, or access my GitHub account.</p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={4}>
            <h3 class="display-7">About Me</h3>
            <p>
              I am a fourth year ECE student at UT Austin, focusing on 
              integrated circuits and software development.
            </p>
            <Button variant="dark">View my coursework</Button>
          </Col>
          <Col md={4}>
            <h3 class="display-7">Projects</h3>
            <p>View my academic and personal projects, which include data analyses, websites, and more!</p>
            <Button variant="dark" href="/projects">View projects</Button>
          </Col>
          <Col md={4}>
            <h3 class="display-7" style={{marginBottom: '1.25rem'}}>Contact Me</h3>
            <Row style={{textAlign: 'center'}}>
              <Col>
                {/* <Button variant="outline-dark">GitHub</Button> */}
                <a rel="noopener noreferrer" href="https://github.com/contejus" target="_blank">
                  <img alt="View my GitHub" src={github} style={{width:"3rem",height:"3rem"}}>
                  </img>
                </a>
              </Col>
              <Col>
                {/* <Button variant="dark">LinkedIn</Button> */}
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/tgmathew" target="_blank">
                  <img alt="View my LinkedIn profile" src={linkedin} style={{width:"3rem",height:"3rem"}}></img>
                </a>
              </Col>
              <Col>
                <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1UF3lEhhazeLtPX7F0nHyFXuvd_WYmOqk/view?usp=sharing" target="_blank">
                  <img alt="View my resume" src={resume} style={{width:"3rem",height:"3rem"}}></img>
                </a>
              </Col>
              <Col>
                <a href="mailto:tejusmathew@utexas.edu">
                  <img alt="Send me an email" src={email} style={{width:"3rem",height:"3rem"}}></img>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        
      </Container>
      
      {/* <footer class="container">
        <div sty;e>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer> */}

  </React.Fragment>
)

export default IndexPage
