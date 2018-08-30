import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./style.css";

const content = [
  {
    title:
      "When something is important enough, you do it even if the odds are not in your favor.",
    description: "",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Elon Musk",
    userProfile:
      "https://specials-images.forbesimg.com/imageserve/5a8d90fd4bbe6f2652f61c15/416x416.jpg?background=000000&cropX1=0&cropX2=1999&cropY1=159&cropY2=2159"
  },
  {
    title:
      "I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying.",
    description: "",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Jeff Bezos",
    userProfile:
      "https://specials-images.forbesimg.com/imageserve/5a8d920d31358e4955adf197/416x416.jpg?background=000000&cropX1=755&cropX2=2357&cropY1=494&cropY2=2097"
  },
  {
    title: "Have the courage to follow your heart and intuition.",
    description: "",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Steve Jobs",
    userProfile:
      "https://www.biography.com/.image/t_share/MTE5NDg0MDU0NTIzODQwMDE1/steven-jobs-9354805-2-402.jpg"
  }
];

const App = () => (
  <div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              By <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  </div>
);

export default App;
