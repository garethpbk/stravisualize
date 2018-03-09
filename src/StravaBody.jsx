import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Title from "./Title";
import Activities from "./Activities";
import Stats from "./Stats";
import Map from "./Map";

export default props => (
  <div>
    <header className="App-header">
      <img src={props.bike} className="App-logo" alt="logo" />
      <Title firstName={props.firstName} />
    </header>
    <h2 style={{ fontSize: "2.5em", fontWeight: "800", color: "#607D8B" }}>
      <strong>
        <em>{props.desc}</em>
      </strong>
    </h2>

    <Activities
      strava={props.strava}
      apiKey={props.apiKey}
      onApiKeyChange={props.onApiKeyChange}
      submitApiKey={props.submitApiKey}
      open={props.open}
      onClick={props.onClick}
    />

    <Grid fluid>
      <Row>
        <Col xs={12}>
          <Map
            isMarkerShown
            route={props.actPolyline}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: "400px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            startLatLng={props.actLatLng}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={2} />
        <Col xs={9}>
          <Stats
            actId={props.actId}
            actName={props.actName}
            actDistance={props.actDistance}
            actTime={props.actTime}
            actType={props.actType}
            actDate={props.actDate}
            actPolyline={props.actPolyline}
            actSpeed={props.actSpeed}
          />
        </Col>
        <Col xs={1} />
      </Row>
    </Grid>
  </div>
);
