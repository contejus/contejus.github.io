import React from "react"
import { Helmet } from "react-helmet"

import Navbar from "../components/navbar.js"
import GoogleMapReact from 'google-map-react';

import "../stylesheets/maps.scss"

const AnyReactComponent = ({ text }) => (
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
    key: 'AIzaSyCQuo1OKiBqgURMSaSFpcxSrwMHjgCuLag',
    items: []
  };

  constructor() {
    super()
    this.state = {
        latitude: [],
        longitude: [],
        location: [],
        prevLocations: [],
        done: false,
        permission: false
    }
  }  

  getLocations() {
    // get locations from API
    fetch("https://infinite-ocean-46338.herokuapp.com/api/location", {
        method: "GET",    
    })
    .then(res => res.json())
    .then(result2 => {
        this.setState({
            prevLocations: result2['objects'],
        });
        this.state.prevLocations.forEach ( location => {
            this.props.items.push(
            <AnyReactComponent
                    lat={location['latitude']}
                    lng={location['longitude']}
                    text="User"
                />
            )
        });

        // look up new location and then store in API
        fetch("https://json.geoiplookup.io")
            .then(res => res.json())
            .then(result => {
            this.setState({
                latitude: result.latitude,
                longitude: result.longitude,
                location: result.city + ", " + result.region + ", " + result.country_name
            });
            fetch("https://infinite-ocean-46338.herokuapp.com/api/location/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                "latitude": (this.state.latitude),
                "longitude": (this.state.longitude)
                })      
            })
            this.setState({
                done: true
            });
            })  
    }  
    )
  }

  handleClick(){
        this.setState({
            permission: true
        });
        this.getLocations();
    }

  render() {
    const isLoaded = this.state.done;
    const havePermission = this.state.permission;
    let section;
    if(!havePermission){
        section = 
        <div className="warning-div">
            <article class="message is-primary privacy">
                <div class="message-header">
                    <p>Location Policy</p>
                </div>
                <div class="message-body">
                    <p>
                        This page finds location by using your IP address. It will not find your exact location, only 
                        the general area. This location is also stored and secured in my API. Please click "Accept" if you 
                        accept these conditions, or "Cancel" if you do not.
                    </p>
                </div>
                <div className="choice-div">
                    <button class="button is-success" onClick={() => {this.handleClick()}}>Accept</button>
                    <a class="button is-danger" href="/">Cancel</a>
                </div>
            </article>
        </div>
    } else if (isLoaded) {
      section = 
      <div class="map-div">
        <div style={{ height: '93.5vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={
                  { key: this.props.key}
              }
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.props.items}
            <AnyReactComponent
              lat={this.state.latitude}
              lng={this.state.longitude}
              text="You"
              style={{background: 'blue'}}
              />
          </GoogleMapReact>
        </div>
        <div class="location-display">
          <button class="button is-primary" style={{leftBorderRadius: '0px'}} >You are visiting from: {this.state.location}</button>
        </div>
      </div>;
    } else {
      section = 
        <div class="loading-button">
            <button class="button is-primary is-loading is-large" />
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