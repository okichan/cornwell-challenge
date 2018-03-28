import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
let position = { lat: -37.812534, lng: 144.937896 }
let customIcon = {
  url: require("../assets/marker.svg"),
  size: { height: 40, width: 40 },
  scaledSize: { height: 40, width: 40 },
  fixedRotation: true
};


export const MyMapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={ position }
    defaultOptions={{
      styles: [
        { featureType: "all", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: "0" }]
        },
        {
          featureType: "all",
          elementType: "geometry.stroke",
          stylers: [{ visibility: "on" }, { color: "#dddddd" }, { saturation: "-100" }]
        },
        { featureType: "all", elementType: "labels.text", stylers: [{ visibility: "on" }, { color: "#555555" }] },
        { featureType: "all", elementType: "labels.text.fill", stylers: [{ visibility: "on" }] },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [{ saturation: -31 }, { lightness: -33 }, { weight: 2 }, { gamma: 0.8 }, { visibility: "off" }]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [{ visibility: "on" }, { saturation: -100 }, { lightness: -3 }]
        },
        { featureType: "administrative.country", elementType: "all", stylers: [{ visibility: "on" }] },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [{ visibility: "on" }, { color: "#000000" }, { weight: "1.93" }]
        },
        { featureType: "administrative.country", elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [{ visibility: "on" }, { color: "#000000" }, { weight: "1.26" }]
        },
        { featureType: "administrative.province", elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
        { featureType: "landscape", elementType: "geometry", stylers: [{ lightness: 40 }, { saturation: 30 }] },
        { featureType: "poi", elementType: "geometry", stylers: [{ saturation: 20 }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ lightness: 20 }, { saturation: -20 }] },
        { featureType: "road", elementType: "geometry", stylers: [{ lightness: 10 }, { saturation: -30 }] },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ saturation: 25 }, { lightness: 25 }, { color: "#e0e0e0" }]
        },
        { featureType: "road.highway", elementType: "all", stylers: [{ visibility: "on" }] },
        { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ visibility: "on" }, { color: "#dfdfdf" }] },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ visibility: "on" }, { color: "#d1d1d1" }]
        },
        { featureType: "road.highway", elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
        {
          featureType: "road.highway",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }, { saturation: "-100" }, { lightness: "1" }, { gamma: "1.80" }, { weight: "0.01" }]
        },
        { featureType: "road.highway.controlled_access", elementType: "labels.text.fill", stylers: [{ color: "#514444" }] },
        {
          featureType: "road.highway.controlled_access",
          elementType: "labels.icon",
          stylers: [{ visibility: "on" }, { saturation: "-100" }]
        },
        { featureType: "road.arterial", elementType: "all", stylers: [{ visibility: "off" }] },
        { featureType: "road.arterial", elementType: "geometry.fill", stylers: [{ color: "#dbdbdb" }, { visibility: "on" }] },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [{ visibility: "on" }, { color: "#cfcfcf" }]
        },
        { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ visibility: "on" }] },
        { featureType: "road.local", elementType: "all", stylers: [{ visibility: "on" }] },
        { featureType: "road.local", elementType: "geometry.fill", stylers: [{ color: "#f1f1f1" }, { visibility: "on" }] },
        { featureType: "road.local", elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
        { featureType: "water", elementType: "all", stylers: [{ lightness: "-17" }, { gamma: "2.09" }] }
      ]
    }}
  >
    {props.isMarkerShown && <Marker icon={ customIcon } position={ position } />}
  </GoogleMap>
));
