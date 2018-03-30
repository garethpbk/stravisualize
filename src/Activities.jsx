import React from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Strav from './Strav';

const Activities = props => {
  const fieldStyle = {
    paddingLeft: '5px',
    marginBottom: '10px',
    width: '95%'
  };

  return (
    <div id="activity-feed">
      <Drawer open={props.open} width={300}>
        <h1 style={{ textAlign: 'center' }}>ACTIVITIES</h1>
        <RaisedButton label="Toggle" onClick={props.handleToggle} style={{ marginBottom: '25px', width: '100%' }} />
        <Divider />
        <TextField
          hintText="Enter Api Key..."
          value={props.apiKey}
          onChange={props.onApiKeyChange}
          style={fieldStyle}
        />
        <RaisedButton label="Submit API Key" primary={true} onClick={props.submitApiKey} style={fieldStyle} />

        {props.strava.map(strav => (
          <Strav
            key={strav.id}
            id={strav.id}
            name={strav.name}
            distance={strav.distance}
            time={strav.moving_time}
            startdatelocal={strav.start_date_local}
            type={strav.type}
            startlatlng={strav.start_latlng}
            polyline={strav.map.summary_polyline}
            speed={strav.average_speed}
            onClick={props.onClick}
          />
        ))}
      </Drawer>
    </div>
  );
};

export default Activities;
