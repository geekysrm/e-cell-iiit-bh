import React, { Component } from "react";

import "./style.css";

class EventCard extends Component {
  render() {
    return (
      <div className="event">
        <center>
          <h1>Events</h1>
          <br />
          <br />
        </center>
        <div className="testimonial-event group">
          <div className="image-container">
            <div>
              <img src="https://ecell.iiit.ac.in/blogs/images/dropper.jpg" />
            </div>
          </div>
          <div className="event-container">
            <h3>Event1</h3>
            <br />
            <span>30 Aug, 2018</span>
            <br />
            <br />
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque dolores facere obcaecati sequi, laboriosam non
                exercitationem voluptate provident rem esse.
              </p>
            </blockquote>
            <br />
            <cite>
              <span>VENUE : AG02</span>
            </cite>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard;
