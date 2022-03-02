import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Javascript", "React Native", "React"],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1500,
      startDelay: 500,
    });
  }, []);
  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/me4.png" alt="photo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ozan Gurer</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <h3 className="developer">Developer</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="downicon" />
        </a>
      </div>
    </div>
  );
}
