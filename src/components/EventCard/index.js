import React, { Component } from "react";

import "./style.css";

class EventCard extends Component {
  render() {
    return (
      <div className="event-card-container">
        <div className="event-image-container">
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt=""
          />
        </div>

        <div className="event-title">Launch event</div>

        <div className="event-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <br />
      </div>
    );
  }
}

export default EventCard;
