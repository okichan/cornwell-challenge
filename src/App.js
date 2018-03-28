import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Container, YelloBg, Title, MapContainer, PhotoContainer, Photo } from "./assets/styles";

class App extends Component {
  render() {
    const MyMapComponent = withGoogleMap(props => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 40.7575285, lng: -73.9884469 }}>
        {props.isMarkerShown && <Marker position={{ lat: 40.7575285, lng: -73.9884469 }} />}
      </GoogleMap>
    ));

    return (
      <div className="App">
        <Container>
          <YelloBg />
          <Title>
            <span>ABOUT US</span>
          </Title>
          <MapContainer>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </MapContainer>

          <PhotoContainer>
            <Photo />
            <Photo>
              <p id="follow-us">follow us &#x27F6;</p>
            </Photo>
            <Photo />
          </PhotoContainer>
        </Container>
      </div>
    );
  }
}

export default App;
