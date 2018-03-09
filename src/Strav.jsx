import React from "react";
import polyline from "./polyline.js";
import Divider from "material-ui/Divider";
import { ListItem } from "material-ui/List";
import DirectionsRun from "material-ui/svg-icons/maps/directions-run";
import DirectionsBike from "material-ui/svg-icons/maps/directions-bike";

const Strav = props => {
  let actType = props.type;
  let actIcon;
  if (actType === "Run") {
    actIcon = <DirectionsRun />;
  } else {
    actIcon = <DirectionsBike />;
  }

  let distance = (props.distance * 0.000621371).toFixed(2);

  let minutes = (props.time - props.time % 60) / 60;
  let seconds = props.time % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let time = minutes + ":" + seconds;

  let formDate = new Date(props.startdatelocal),
    locale = "en-us",
    month = formDate.toLocaleString(locale, { month: "long" });
  formDate = month + " " + formDate.getDate() + ", " + formDate.getFullYear();

  let route;
  if (props.polyline) {
    route = polyline.decode(props.polyline);
  } else {
    route = null;
  }

  let speed = (props.speed * 2.2369362912).toFixed(2);

  let dataRes = {
    id: props.id,
    name: props.name,
    distance: distance,
    time: time,
    type: props.type,
    date: formDate,
    latlng: props.startlatlng,
    polyline: route,
    speed: speed
  };

  return (
    <span>
      <ListItem
        primaryText={[<strong>{props.name}</strong>, <br />, formDate]}
        leftIcon={actIcon}
        onClick={() => props.onClick(dataRes)}
      />
      <Divider />
    </span>
  );
};

export default Strav;
