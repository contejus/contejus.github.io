import React, { useEffect, Component} from "react"
import SiteNavbar from "../components/navbar"
import {Button} from "react-bootstrap"
import GoogleMapReact from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.css';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'gray',
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
        done: false
    }
  }

  componentDidMount() {
    fetch("https://infinite-ocean-46338.herokuapp.com/api/location", {
      method: "GET",    
    }).then(res => res.json())
    .then(result2 => {
      this.setState({
        prevLocations: result2['objects'],
      });
      this.state.prevLocations.forEach ( location => {
        this.props.items.push(
          <AnyReactComponent
                lat={location['latitude']}
                lng={location['longitude']}
                text="Anon"
            />
        )
      });
      fetch("https://json.geoiplookup.io")
        .then(res => res.json())
        .then(result => {
          this.setState({
            latitude: result.latitude,
            longitude: result.longitude,
            location: result.city + ", " + result.region + ", " + result.country_name,
            done: true
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
          
        })  
      }  
    )
  }

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
            {this.props.items}
             <AnyReactComponent
              lat={this.state.latitude}
              lng={this.state.longitude}
              text="You"
              style={{background: 'blue'}}
              />
          </GoogleMapReact>
        </div>
        <div style={{position: 'absolute', bottom: '5%', left: '25%', right: '25%', textAlign: 'center'}}>
          <Button variant="dark" style={{leftBorderRadius: '0px'}} >You are visiting from: {this.state.location}</Button>
        </div>
      </React.Fragment>
    );
  }
}
 
export default SimpleMap;