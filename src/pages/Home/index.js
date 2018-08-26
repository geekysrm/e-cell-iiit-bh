import React, { Component } from "react";

import Hero from "../../components/Hero/";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <nav>
        </nav>
        <Hero />
      </div>
    );
  }
}

export default Home;
