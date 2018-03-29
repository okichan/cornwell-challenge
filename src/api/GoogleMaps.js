/* global google */
import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon } from "react-google-maps";
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

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
      defaultZoom={15}
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
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
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
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
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
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
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
                "color": "#d1d1d1"
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
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
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
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
        
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
          strokeColor: "#fddb00",
          fillColor: "#FFCE00",
          strokeOpacity: 0.28,
          strokeWeight: 1,
          fillOpacity: 0.5
        }}
      />

      {props.isMarkerShown && <Marker icon={customIcon} position={position} />}
    </GoogleMap>
  ))
);
