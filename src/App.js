import "./App.css";
import "animate.css";

import pic1 from "./images/1.jpeg"; // relative path to image
import pic2 from "./images/2.jpeg"; // relative path to image
import pic3 from "./images/3.webp"; // relative path to image
import pic4 from "./images/4.jpeg"; // relative path to image
import pic5 from "./images/5.jpeg"; // relative path to image
import pic6 from "./images/6.jpeg"; // relative path to image
import pic7 from "./images/7.jpeg"; // relative path to image
import pic8 from "./images/8.jpeg"; // relative path to image

function App() {
  return (
    <div className="App">
      <h1>❤️Happy Valentine's Day Lidija❤️</h1>
      <h3>
        I miss you a lot! I hope you enjoy this selection of some of the memes
        we have sent each other ❤️
      </h3>
      <h4>Love you!</h4>
      <img
        className="animate__animated animate__rotateIn animate__slower"
        height="250px"
        width="250px"
        src={pic1}
        alt="logo"
      />
      <img
        className="animate__animated animate__rotateIn animate__slower"
        height="250px"
        width="250px"
        src={pic2}
        alt="logo"
        loading="lazy"
      />

      <img
        className="animate__animated animate__rotateIn animate__slower"
        height="250px"
        width="250px"
        src={pic3}
        alt="logo"
        loading="lazy"
      />

      <img
        className="animate__animated animate__rotateIn animate__slower"
        height="250px"
        width="250px"
        src={pic4}
        alt="logo"
        loading="lazy"
      />

      <img
        className="animate__animated animate__rotateIn animate__slower"
        height="250px"
        width="250px"
        src={pic5}
        alt="logo"
        loading="lazy"
      />

      <img
        className="animate__animated animate__rotateIn animate__slower"
        height="250px"
        width="250px"
        src={pic6}
        alt="logo"
        loading="lazy"
      />

      <img
        className="animate__animated animate__rotateIn animate__slower"
        height="250px"
        width="250px"
        src={pic7}
        alt="logo"
        loading="lazy"
      />

      <img
        className="animate__animated animate__rotateIn animate__slower"
        height="250px"
        width="250px"
        src={pic8}
        alt="logo"
        loading="lazy"
      />
    </div>
  );
}

export default App;
