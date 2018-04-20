import React from 'react';
import Paper from 'material-ui/Paper';
import { Row, Col } from 'react-flexbox-grid';
import DirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import DirectionsBike from 'material-ui/svg-icons/maps/directions-bike';

const Stats = props => {
  const style = {
    height: '100%',
    width: '100%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    color: '#607D8B',
    fontSize: '2.5em',
    fontWeight: '800'
  };

  const svgStyle = {
    height: 'auto',
    width: '50%',
    color: '#607D8B',
    fontSize: '2em',
    fontWeight: '800',
    marginTop: '25px'
  };

  let type = props.actType;
  let icon;
  if (type === 'Run') {
    icon = <DirectionsRun style={svgStyle} />;
  } else {
    icon = <DirectionsBike style={svgStyle} />;
  }

  return (
    <div>
      {/* <h1>STATS</h1> */}
      <Row>
        <Col xs={12} lg={4}>
          <Paper style={style} zDepth={1}>
            {icon}
          </Paper>
        </Col>

        <Col xs={12} lg={8}>
          <Row>
            <Col xs={6}>
              <Paper style={style} zDepth={1}>
                <p>{props.actDate}</p>
              </Paper>
            </Col>
            <Col xs={6}>
              <Paper style={style} zDepth={1}>
                <p>{props.actDistance} Miles</p>
              </Paper>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Paper style={style} zDepth={1}>
                <p>{props.actSpeed} MPH</p>
              </Paper>
            </Col>
            <Col xs={6}>
              <Paper style={style} zDepth={1}>
                <p>{props.actTime}</p>
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Stats;
