import React, { Component } from "react";

import Hero from "../../components/Hero/";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <nav>

          <div>
            <a href="#" >Home</a>
          </div>
          <div>
            <a href="#" >Contact Us</a>
          </div>

        </nav>
        <Hero />
      </div>
    );
  }
}

export default Home;
