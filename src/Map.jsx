import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";

const MapComponent = withScriptjs(
  withGoogleMap(props => {
    let startLat = props.startLatLng[0];
    let startLng = props.startLatLng[1];

    let route = props.route;
    if (route != null) {
      route = route.map(x => {
        return {
          lat: x[0],
          lng: x[1]
        };
      });
    } else {
      route = [];
    }

    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: startLat, lng: startLng }}
        center={{ lat: startLat, lng: startLng }}
      >
        <Polyline path={route} />
        {props.isMarkerShown && <Marker position={{ lat: startLat, lng: startLng }} />}
      </GoogleMap>
    );
  })
);

export default MapComponent;
