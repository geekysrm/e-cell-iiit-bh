import React, { Component } from "react";

import Hero from "../../components/Hero/";
import Taglines from "../../components/Taglines";
import Quotes from "../../components/Quotes";
<<<<<<< HEAD
import Footer from '../../components/Footer';
=======
import Events from "../../components/Events";
>>>>>>> bd6ccf143623200eda49a2a0407a6e0f3a8ccb55

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
            <a href="#events">Events</a>
          </div>
          <div>
            <a href="#contact">Contact Us</a>
          </div>
        </nav>

        <Hero />

        <Taglines />
        <div class="parallax1" />
        <Events id="events" />
        <div class="parallax2" />
        <Quotes />
        <Footer />
        
      </div>
    );
  }
}

export default Home;
