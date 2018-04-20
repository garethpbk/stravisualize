import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';

const MapComponent = withScriptjs(
  withGoogleMap(props => {
    if (props.startLatLng) {
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
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQpUNVE_UooIf_nSAZoq6Evrt1U8_FWuU"
          defaultZoom={13}
          defaultCenter={{ lat: startLat, lng: startLng }}
          center={{ lat: startLat, lng: startLng }}
        >
          <Polyline path={route} />
          {props.isMarkerShown && <Marker position={{ lat: startLat, lng: startLng }} />}
        </GoogleMap>
      );
    }
    let startLat = 32.73;
    let startLng = -117.16;
    return (
      <GoogleMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQpUNVE_UooIf_nSAZoq6Evrt1U8_FWuU"
        defaultZoom={13}
        defaultCenter={{ lat: startLat, lng: startLng }}
        center={{ lat: startLat, lng: startLng }}
      >
        {props.isMarkerShown && <Marker position={{ lat: startLat, lng: startLng }} />}
      </GoogleMap>
    );
  })
);

export default MapComponent;
