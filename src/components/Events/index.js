import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import "./style.css";
import EventCard from "../EventCard/";

class Events extends Component {
  render() {
    return (
      <div id="events">
        <EventCard />
      </div>
    );
  }
}
export default Events;
