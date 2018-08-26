import React, { Component } from "react";

import Hero from "../../components/Hero/";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Hero />
      </div>
    );
  }
}

export default Home;
