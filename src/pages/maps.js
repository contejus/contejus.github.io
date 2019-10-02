import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMapReact from 'google-map-react';
import MapsApiKey from '../pages/api_keys';
import 'bootstrap/dist/css/bootstrap.css';

import {Navbar, NavbarBrand, Nav} from 'react-bootstrap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 0,
    key: 'AIzaSyA1e3zpcICRqv1Hjp8WSS_Rn7iHkJcXNKw'
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <React.Fragment>
        <Navbar bg='dark' variant='dark' style={{height: '10vh', width: '100%'}}>
          <Navbar.Brand href="/">Tejus Mathew</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Projects</Nav.Link>
            <Nav.Link href="/">Visitor Map</Nav.Link>
          </Nav>
        </Navbar>
        <div style={{ height: '90vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={
                  { key: this.props.key}
              }
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default SimpleMap;