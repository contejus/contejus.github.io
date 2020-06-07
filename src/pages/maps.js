import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Navbar from "../components/navbar.js"
import GoogleMapReact from 'google-map-react';

import "../stylesheets/maps.scss"

const Circle = ({ text }) => (
  <div style={{
    color: 'white', 
    background: '#003366',
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
 
class MapPage extends React.Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 0,
    key: 'AIzaSyAgeMf2wsomCk45C0JsatuRdgyy7NgYVEc'
  };

  constructor() {
    super()
    this.state = {
        latitude: [],
        longitude: [],
        location: [],
        permission: false,
        gotUserLocation: false
    }
  }  

  getLocation() {
    // look up new location
    fetch("https://json.geoiplookup.io")
    .then(res => res.json())
    .then(result => {
        this.setState({
            latitude: result.latitude,
            longitude: result.longitude,
            location: result.city + ", " + result.region + ", " + result.country_name,
            gotUserLocation: true
        });
    })
  }

  addLocation(){
    // store new user location to API
    fetch("https://tm-location.herokuapp.com/location/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': 'Basic ' + 'Y2xpZW50Oms2QTJ3aWppZHBzY1kzaw==',
      },
      body: JSON.stringify({
      "latitude": (this.state.latitude),
      "longitude": (this.state.longitude)
      }),      
    })
  }

  handleClick(){
    this.setState({
        permission: true
    });
    this.getLocation();
  }

  render() {
    const gotUserLocation = this.state.gotUserLocation;
    const havePermission = this.state.permission;
    let section;

    if(!havePermission){
      section = 
        <div className="warning-div is-404">
            <article className="message is-primary privacy">
                <div className="message-header">
                    <p>Location Policy</p>
                </div>
                <div className="message-body">
                    <p>
                        This page finds your general (not exact) location by using your IP address and stores only the latitude and
                        longitude in my API. Please click "Accept" if you are comfortable with this or "Cancel" to go home.
                    </p>
                </div>
                <div className="choice-div">
                    <button className="button is-success" onClick={() => {this.handleClick()}}>Accept</button>
                    <a className="button is-danger" href="/">Cancel</a>
                </div>
            </article>
        </div>
    } else if (gotUserLocation) {
      this.addLocation();
      section = 
        <div className="map-div">
          <div style={{ height: '93.5vh', width: '100%' }}>
            <StaticQuery
              query= {
                graphql`
                    query LocationData {
                      allLocation {
                        edges {
                          node {
                            latitude
                            longitude
                          }
                        }
                      }
                    }  
                `
              }
              render= {
                data => (
                  <React.Fragment>
                    <GoogleMapReact
                      bootstrapURLKeys={
                            { key: this.props.key}
                        }
                      defaultCenter={this.props.center}
                      defaultZoom={this.props.zoom}
                    >
                      {data.allLocation.edges.map((locationNode) => {
                          const location = locationNode.node;
                          return (
                            <Circle
                                lat={location['latitude']}
                                lng={location['longitude']}
                                text="User"
                            />
                          )
                      })}
                      <Circle
                        lat={this.state.latitude}
                        lng={this.state.longitude}
                        text="You"
                        style={{background: 'blue'}}
                        />
                    </GoogleMapReact>
                  </React.Fragment>
              )}
            />
          </div>
          <div className="location-display">
            <button className="button is-primary" style={{leftBorderRadius: '0px'}} >You are visiting from: {this.state.location}</button>
          </div>
        </div>;
    } else {
      section = 
        <div className="loading-button">
            <button className="button is-primary is-loading is-large" />
        </div>;
    }

    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Tejus Mathew</title>
            <link rel="canonical" href="http://contejus.github.io" />
        </Helmet>
        <Navbar />
        {section}
      </div>
    );
  }
}
 
export default MapPage;