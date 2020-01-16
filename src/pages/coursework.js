import React from "react"
import SiteNavbar from "../components/navbar"
import {Card, Button, Container, Row, Col, Jumbotron, ListGroup} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

var link = "https://wallpapercave.com/wp/wp2943265.jpg"

class CourseworkPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SiteNavbar>
                </SiteNavbar>
                <Jumbotron style={{background: "url(" + link + ")", borderRadius: '0px', backgroundSize: 'cover'}}>
                    <Container style={{color: 'white'}}>
                    <h1 class="display-4">Coursework</h1>
                    <p>View classes I've taken at UT Austin as part of the Electrical Engineering curriculum.</p>
                    </Container>
                </Jumbotron>
                <ListGroup style={{marginLeft: '20%', marginRight: '20%'}} variant="flush">
                    <ListGroup.Item variant="dark"><strong>Freshman Year</strong> - (2016-2017)</ListGroup.Item>
                    <ListGroup.Item>EE 302 - Intro Electrical Engineering</ListGroup.Item>
                    <ListGroup.Item>EE 306 - Intro to Computing</ListGroup.Item>
                    <ListGroup.Item>EE 411 - Circuit Theory</ListGroup.Item>
                    <ListGroup.Item>EE 319K - Intro to Embedded Systems</ListGroup.Item>
                    <ListGroup.Item variant="dark"><strong>Sophomore Year</strong> - (2017-2018)</ListGroup.Item>
                    <ListGroup.Item>EE 312 - Software Design and Impl I</ListGroup.Item>
                    <ListGroup.Item>EE 313 - Linear Systems and Signals</ListGroup.Item>
                    <ListGroup.Item>EE 316 - Digital Logic Design</ListGroup.Item>
                    <ListGroup.Item>EE 422C - Software Design and Impl 2</ListGroup.Item>
                    <ListGroup.Item>EE 325 - Electromagnetic Engineering</ListGroup.Item>
                    <ListGroup.Item>EE 333T - Engineering Communication</ListGroup.Item>
                    <ListGroup.Item variant="dark"><strong>Junior Year</strong> - (2018-2019)</ListGroup.Item>
                    <ListGroup.Item>EE 438 - Fundamentals of Circuit Design I Lab</ListGroup.Item>
                    <ListGroup.Item>EE 339 - Solid State Electronics</ListGroup.Item>
                    <ListGroup.Item>EE 360C - Algorithms</ListGroup.Item>
                    <ListGroup.Item>EE 461L - Software Design Lab</ListGroup.Item>
                    <ListGroup.Item>EE 445S - Real-Time Digital Signal Proc Lab</ListGroup.Item>
                    <ListGroup.Item>EE 351K - Probability and Random Processes</ListGroup.Item>
                    <ListGroup.Item>EE 460M - Digital Systems Design using HDL</ListGroup.Item>
                    <ListGroup.Item variant="dark"><strong>Senior Year</strong> - (2019-2020)</ListGroup.Item>
                    <ListGroup.Item>EE 461P - Data Science Principles</ListGroup.Item>
                    <ListGroup.Item>EE 364D - Intro to Engineering Design</ListGroup.Item>
                    <ListGroup.Item>EE 374K - Biomedical Electronics Instrumentation Design</ListGroup.Item>
                    <ListGroup.Item>EE 464R - Senior Design Project</ListGroup.Item>
                </ListGroup>

            </React.Fragment>
        )
    }
}

export default CourseworkPage
