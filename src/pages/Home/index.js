import React, { Component } from "react";

import Hero from "../../components/Hero/";
import Taglines from "../../components/Taglines";
import Quotes from "../../components/Quotes";

import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">Contact Us</a>
          </div>
        </nav>

        <Hero />

        <Taglines />
        <div class="parallax1" />
        <Quotes />
        <div class="parallax2" />
      </div>
    );
  }
}

export default Home;
