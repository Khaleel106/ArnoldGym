import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Roadmap from "./Roadmap";
import Benefits from "./Benefits";
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
      
      <h2 className="text-center text-xl xl:text-6xl mt-10 mb-10">
        Meet our{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Trainer
        </span>
      </h2>
      <div
        id="trainer"
        className="w-full h-auto lg:h-screen flex flex-col lg:flex-row items-center justify-between bg-neutral-900 "
      >
        <img
          data-scroll
          data-scroll-speed="0.5"
          className="w-full overflow-hidden lg:w-auto h-auto sm:h-80 lg:h-full rounded-md lg:rounded-none"
          src="src\assets\pic.jpg"
          alt="transformation"
        />
        <div className="my-11 mx-8 lg:w-1/2 lg:my-auto">
          <div className="text-3xl lg:text-4xl xl:text-5xl">Hi, my name is</div>
          <div className="text-5xl lg:text-7xl xl:text-8xl">
            Muhammad Saifulla
          </div>
          <div className="text-4xl lg:text-6xl xl:text-6xl my-5">
            And I'm a{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
              Certified Nutrition Expert and Fitness Consultant
            </span>
          </div>
          <div className="text-base lg:text-lg xl:text-2xl">
            Transform your life just like I did. I know the struggle of facing
            LOW CONFIDENCE, HEALTH RISKS due to being overweight firsthand. But
            I made a choice to change. Through learning about nutrition and
            hitting the gym regularly, I transformed my body and reclaimed my
            health. If you're ready to start your own journey, join me at{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
              ArnoldGym
            </span>
            . Let's make those fitness goals a reality together!
          </div>
        </div>
      </div>
      
      <div>
         <Roadmap/>
      </div>
    </>
  );
};

export default Trainer;
