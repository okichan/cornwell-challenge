import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Container, YelloBg, Title, Map, PhotoContainer, Photo } from "./assets/styles";

class App extends Component {
  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
          {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
      ))
    );
    return (
      <div className="App">
        <Container>
          <YelloBg />
          <Title>
            <span>ABOUT US</span>
          </Title>
          <Map>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Map>

              <PhotoContainer>
      <Photo />
      <Photo><p id="follow-us">follow us &#x27F6;</p></Photo>
      <Photo />
    </PhotoContainer>
          
        </Container>
      </div>
    );
  }
}

export default App;
