import React, { Component } from "react"

import SiteNavbar from "../components/navbar"
import GoogleMapReact from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.css';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
 
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
        <SiteNavbar>
        </SiteNavbar>
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