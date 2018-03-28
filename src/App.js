import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Container, YelloBg, Title, MapContainer, PhotoContainer, Photo } from "./assets/styles";
import { fetchPhotos } from "./api/InstaApi";
import { MyMapComponent } from "./api/GoogleMaps";

class App extends Component {
  state = {
    photoData: null,
    error: null,
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  };

  componentDidMount() {
    fetchPhotos()
      .then(photoData => {
        this.setState({
          photoData,
          error: null
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });
  }

  render() {
    const { photoData, error, googleMapURL } = this.state;

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
              googleMapURL={ googleMapURL }
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </MapContainer>

          <PhotoContainer>
            {photoData &&
              photoData.map((m, i) => {
                if (i < 3) {
                  return <Photo src={m.images.standard_resolution.url} key={i} />;
                } else return null;
              })}
            <a href="https://www.cornwell.com.au/" target="_blank" rel="noopener noreferrer">
              <p id="follow-us">follow us &#160; &#10132;</p>
            </a>
          </PhotoContainer>
        </Container>
      </div>
    );
  }
}

export default App;
