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
      <div className="events-container">
        <div className="events-page-heading">
          We Believe In Learning By Doing
        </div>

        <br />

        <div className="card-container">
          <EventCard />
        </div>
      </div>
    );
  }
}
export default Events;
