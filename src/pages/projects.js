import React from "react"
import gatsbyicon from "../images/gatsby-icon.png"
import SiteNavbar from "../components/navbar"
import {Card, Button, Container, Row, Col, Jumbotron} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

var link = "https://wallpapercave.com/wp/wp2943265.jpg"

class ProjectPage extends React.Component {
  render(){
    return (
      <React.Fragment>
          <SiteNavbar>
          </SiteNavbar>
          <Jumbotron style={{background: "url(" + link + ")", borderRadius: '0px', backgroundSize: 'cover'}}>
            <Container style={{color: 'white'}}>
              <h1 class="display-4">Projects</h1>
              <p>View links to projects I've worked on, both in-school and at internships.
              </p>
            </Container>
          </Jumbotron>
          <Container style={{marginTop: '5vh'}}>
            <Row>
              <Col style={{marginBottom: '30px'}}>
                <Card style={{width: '18rem'}}>
                  <Card.Img variant="top" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v261-minty-financedoodle-02_2.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1200&s=9cca881fefd48c75cb8bf77f99777f31" />
                  <Card.Body>
                    <Card.Title>Credit Card Fraud</Card.Title>
                    <Card.Text>
                      Using masked credit card credentials to identify
                      fraudulent transactions. 
                    </Card.Text>
                    <Button variant="dark" href="https://github.com/contejus/CreditCardFraud">View</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{marginBottom: '30px'}}>
              <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="https://media.architecturaldigest.in/wp-content/uploads/2019/12/payal-singhal-wallpaper-marshalls-866x487.jpg" />
                  <Card.Body>
                    <Card.Title>Fashion Review Analysis</Card.Title>
                    <Card.Text>
                      Predicting customer ratings and recommendations given sentiment present in review text, using sklearn and Python to build the model. 
                    </Card.Text>
                    <Button variant="dark" href="https://github.com/contejus/FashionReviewAnalysis">View</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{marginBottom: '30px'}}>
                <Card style={{width: '18rem'}}>
                  <Card.Img variant="top" src="https://cnet3.cbsistatic.com/img/2019/04/09/5cfe13f7-c26b-4e74-a581-751937af380c/accord-hero.jpg" />
                  <Card.Body>
                    <Card.Title>Car MPG Prediction</Card.Title>
                    <Card.Text>
                      Using a car's weight, size, and engine type (ex. cylinder count, volume) to predict its fuel efficiency.
                    </Card.Text>
                    <Button variant="dark" href="https://github.com/contejus/CarMPGPrediction">View</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container style={{marginTop: '5vh'}}>
            <Row>
              <Col style={{marginBottom: '30px'}}>
                  <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="https://hackernoon.com/drafts/a4zx3210.png" />
                    <Card.Body>
                      <Card.Title>contejus.github.io</Card.Title>
                      <Card.Text>
                        View the source code behind this website, built using Gatsby, React, and Django for functionality. 
                      </Card.Text>
                      <Button variant="dark" href="https://github.com/contejus/contejus.github.io">View</Button>
                    </Card.Body>
                  </Card>
                </Col>
              <Col style={{marginBottom: '30px'}}>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="https://images.idgesg.net/images/article/2018/05/insurance-policy-100759623-large.jpg" />
                    <Card.Body>
                      <Card.Title>Insurance Cold Call Success</Card.Title>
                      <Card.Text>
                        Predict the success percentage of an insurance cold call given parameters about the person being called. 
                      </Card.Text>
                      <Button variant="dark" href="https://github.com/contejus/InsuranceColdCallSuccess">View</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col style={{marginBottom: '30px'}}>
                  <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="https://via.placeholder.com/750" />
                    <Card.Body>
                      <Card.Title>Coming Soon</Card.Title>
                      <Card.Text>
                        Placeholder text for project card.
                      </Card.Text>
                      <Button variant="dark">View</Button>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </Container>
      </React.Fragment>
    )
  }
}

export default ProjectPage