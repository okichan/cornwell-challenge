/* global google */
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon } from "react-google-maps";

let position = { lat: -37.812534, lng: 144.937896 };
let customIcon = {
  url: require("../assets/marker.svg"),
  size: { height: 60, width: 60 },
  scaledSize: { height: 60, width: 60 },
  fixedRotation: true
};

export const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={position}
      defaultOptions={{
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "stylers": [
              {
                "color": "#e3e3e3"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "stylers": [
              {
                "color": "#eeeeee"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#d2d2d2"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ff0000"
              },
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#515151"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#cccccc"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#c1c1c1"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ff0000"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "saturation": -100
              }
            ]
          },
          {
            "featureType": "road.highway",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#e5e5e5"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#b7b7b7"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#cdcdcd"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#808080"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#d0d0d0"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#cfcfcf"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              },
              {
                "visibility": "on"
              }
            ]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        scrollwheel: true,
        fullscreenControl: false
        
      }}
    >
      <Polygon
        path={[
          { lat: -37.811333, lng: 144.937067 },
          { lat: -37.81152, lng: 144.936102 },
          { lat: -37.812232, lng: 144.936123 },
          { lat: -37.814673, lng: 144.937646 },
          { lat: -37.813927, lng: 144.939599 },
          { lat: -37.813113, lng: 144.939213 },
          { lat: -37.812333, lng: 144.941251 },
          { lat: -37.812062, lng: 144.941466 },
          { lat: -37.810977, lng: 144.939342 },
          { lat: -37.810943, lng: 144.938848 },
          { lat: -37.811653, lng: 144.938424 },
          { lat: -37.811448, lng: 144.937743 },
          { lat: -37.811326, lng: 144.937089 }
        ]}

        options={{
          strokeColor: "#E2C400",
          fillColor: "#E2C400",
          strokeOpacity: 0.28,
          strokeWeight: 1,
          fillOpacity: 0.5
        }}
      />

      {props.isMarkerShown && <Marker icon={customIcon} position={position} animation={google.maps.Animation.DROP} />}
    </GoogleMap>
  ))
);
