import React, { Component } from "react";

import Hero from "../../components/Hero/";
import Taglines from "../../components/Taglines";
import Quotes from "../../components/Quotes";
import Footer from "../../components/Footer";
import EventCard from "../../components/EventCard";
import Carousel from "../../components/Carousel";

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
        <EventCard id="events" />
        <div class="parallax2" />
        {/* <Quotes /> */}
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default Home;
