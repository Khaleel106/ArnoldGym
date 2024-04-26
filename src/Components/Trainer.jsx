import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Roadmap from "./Roadmap";
import Benefits from "./Benefits";
import tpic from "../assets/pic.jpg";
function loadingAnimation() {
  gsap.from("h3", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
  });
  gsap.from("h2", {
    y: 100,
    opacity: 0,
    delay: 0.7,
    duration: 0.5,
  });
  
}

const Trainer = () => {
  useGSAP(() => {
    loadingAnimation();
  }, []);
  return (
    <>
      <div>
        <h3 className="text-lg xl:text-5xl xl:text-center lg:text-center p-7 m-5">
          At{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            ArnoldGym
          </span>
          , we believe in fostering a supportive and motivating environment for
          all fitness enthusiasts, whether you're a beginner or a seasoned
          athlete. <br />
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            certified trainers
          </span>{" "}
          are here to provide{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            personalized training
          </span>{" "}
          plans and valuable advice to optimize your fitness journey.
        </h3>
      </div>
      <div id="benefits">
        <Benefits/>
      </div>
      
      <div>
         <Roadmap/>
      </div>
    </>
  );
};

export default Trainer;
