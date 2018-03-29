import React, { Component } from "react";
import { Container, YelloBg, Title, MapContainer, PhotoContainer, Photo } from "./assets/styles";
import { fetchPhotos } from "./api/InstaApi";
import { MapComponent } from "./api/GoogleMaps";

class App extends Component {
  state = {
    photoData: null,
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    isMarkerShown: true
  };

  componentDidMount() {
    this.loadPhotos()
    // this.delayedShowMarker()
  }
  
  loadPhotos = () => {
    fetchPhotos()
      .then(photoData => {
        this.setState({
          photoData,
          error: null
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // delayedShowMarker = () => {
  //   setTimeout(() => {
  //     this.setState({ isMarkerShown: true });
  //   }, 2000);
  // };

  render() {
    const { photoData, isMarkerShown, googleMapURL } = this.state;

    return (
      <div className="App">
        <Container>
          <YelloBg />
          <Title>
            <span>ABOUT US</span>
          </Title>
          <MapContainer>
            <MapComponent
              isMarkerShown={isMarkerShown}
              googleMapURL={googleMapURL}
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
