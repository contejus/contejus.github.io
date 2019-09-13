import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMapReact from 'google-map-react';
import MapsApiKey from '../pages/api_keys';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 0,
    key: MapsApiKey['key']
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <React.Fragment>
      <div style={{ backgroundColor: 'blue', height: '15vh', width: '100%'}}>
          <table></table>
      </div>
      <div style={{ height: '85vh', width: '100%' }}>
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