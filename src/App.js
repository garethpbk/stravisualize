import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import bike from './bike.svg';
import './App.css';
import StravaBody from './StravaBody';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: 'Your Activity Here',
      firstName: 'Someone',
      apiKey: '',
      open: true,

      actId: 'ID',
      actName: 'Name',
      actDistance: 'Distance',
      actTime: 'Time',
      actType: 'Type',
      actDate: 'January 1, 2018',
      actLatLng: [32.73, -117.16],
      actPolyline: [],
      actSpeed: 'Speed',

      center: { lat: 59.95, lng: 30.33 },

      strava: []
    };

    this.handleApiKeyChange = this.handleApiKeyChange.bind(this);
    this.handleApiKeySubmit = this.handleApiKeySubmit.bind(this);
    this.handleActivityClick = this.handleActivityClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  /* componentWillMount() {
    axios
      .get("https://www.strava.com/api/v3/athlete/activities?per_page=200&access_token=" + this.state.token)
      .then(response => response.data)
      .then(strava => this.setState({ strava }));
  } */

  handleApiKeyChange(e) {
    this.setState({ apiKey: e.target.value });
  }

  handleApiKeySubmit(e) {
    axios
      .get('https://www.strava.com/api/v3/athlete/activities?per_page=200&access_token=' + this.state.apiKey)
      .then(response => response.data)
      /*    .catch(function(error) {
        this.setState({ strava: [] });
      }) */
      .then(strava => this.setState({ strava }));
    axios
      .get('https://www.strava.com/api/v3/athlete?access_token=' + this.state.apiKey)
      .then(response => response.data.firstname)
      /*  .catch(function(error) {
        this.setState({ firstName: "Someone" });
      }) */
      .then(firstName => this.setState({ firstName }));
  }

  handleActivityClick(data) {
    this.setState({
      desc: data.name,
      actId: data.id,
      actName: data.name,
      actTime: data.time,
      actDistance: data.distance,
      actType: data.type,
      actDate: data.date,
      actLatLng: data.latlng,
      actPolyline: data.polyline,
      actSpeed: data.speed
    });
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    var divStyle = {
      marginLeft: 'auto',
      marginRight: 'auto'
    };
    return (
      <div className="App" style={divStyle}>
        <MuiThemeProvider>
          <StravaBody
            desc={this.state.desc}
            firstName={this.state.firstName}
            bike={bike}
            apiKey={this.state.apiKey}
            onApiKeyChange={this.handleApiKeyChange}
            submitApiKey={this.handleApiKeySubmit}
            open={this.state.open}
            actId={this.state.actId}
            actName={this.state.actName}
            actDistance={this.state.actDistance}
            actTime={this.state.actTime}
            actType={this.state.actType}
            actDate={this.state.actDate}
            actLatLng={this.state.actLatLng}
            actPolyline={this.state.actPolyline}
            actSpeed={this.state.actSpeed}
            strava={this.state.strava}
            center={this.state.center}
            onClick={this.handleActivityClick}
            handleToggle={this.handleToggle}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
