import React, {Component} from "react"
import Link from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import SiteNavbar from "../components/navbar"
import {Card, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';


class ProjectPage extends React.Component {
  render(){
    return (
      <React.Fragment>
          <SiteNavbar>
          </SiteNavbar>
          <Card style={{width: '18rem'}}>
            <Card.ImgOverlay variant="top" src="gatsby-icon.png"/>
            <Card.Body>
              <Card.Title>Credit Card Fraud</Card.Title>
              <Card.Text>
                Placeholder text for test project card.
              </Card.Text>
              <Button variant="dark">View</Button>
            </Card.Body>
          </Card>
      </React.Fragment>
    )
  }
}

export default ProjectPage