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
              <Col>
                <Card style={{width: '18rem'}}>
                  <Card.Body>
                    <Card.Title>Credit Card Fraud</Card.Title>
                    <Card.Text>
                      Using masked credit card credentials and transaction properties to identify
                      if current transactions are fraudulent using sklearn classifiers. 
                    </Card.Text>
                    <Button variant="dark" href="/creditCardFraud">View</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
              <Card style={{width: '18rem'}}>
                  <Card.Body>
                    <Card.Title>Credit Card Fraud</Card.Title>
                    <Card.Text>
                      Placeholder text for test project card.
                    </Card.Text>
                    <Button variant="dark">View</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{width: '18rem'}}>
                  <Card.Body>
                    <Card.Title>Credit Card Fraud</Card.Title>
                    <Card.Text>
                      Placeholder text for test project card.
                    </Card.Text>
                    <Button variant="dark">View</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container style={{marginTop: '5vh'}}>
            <Row>
              <Col>
                  <Card style={{width: '18rem'}}>
                    <Card.Body>
                      <Card.Title>Credit Card Fraud</Card.Title>
                      <Card.Text>
                        Placeholder text for test project card.
                      </Card.Text>
                      <Button variant="dark">View</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                      <Card.Title>Credit Card Fraud</Card.Title>
                      <Card.Text>
                        Placeholder text for test project card.
                      </Card.Text>
                      <Button variant="dark">View</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width: '18rem'}}>
                    <Card.Body>
                      <Card.Title>Credit Card Fraud</Card.Title>
                      <Card.Text>
                        Placeholder text for test project card.
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