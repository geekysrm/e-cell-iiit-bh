import React, { Component } from "react";

import "./style.css";
import video from "../../images/hero/video.mp4";

class Hero extends Component {
  render() {
    return (
      <div id="hero">
        <div>
          <video autoPlay muted loop id="video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div id="content">
          <h1>Entrepreneurship Cell, IIIT-Bh</h1>
          <div>
            All our dreams can come true, if we have the courage to pursue them.
          </div>
          <a href="#events" className="btn">
            View events
          </a>
        </div>
      </div>
    );
  }
}
export default Hero;
