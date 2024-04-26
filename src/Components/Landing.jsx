import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";
import { ladiesgym } from "../constants/index.jsx";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { lgym } from "../constants/index.jsx";
import vid from "../assets/video.mp4";
import tpic from "../assets/pic.jpg";
function loadingAnimation() {
  gsap.from("#page1 h1 ", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
  });
  gsap.from("h3", {
    y: 100,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1,
    duration: 0.5,
  });
}
const Landing = () => {
  useGSAP(() => {
    loadingAnimation();
  }, []); // Run only once after initial render

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipe:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1 
        },
      },
    ],
  };
  return (
    <>
      <div
        id="page1"
        className="text-custom-h1 tracking-tighter leading-tighter text-left py-4 h1-font"
      >
        <h1>
          ONE{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            REP
          </span>{" "}
          AT A TIME,
        </h1>
        <h1>
          ONE{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            MEAL
          </span>{" "}
          AT A TIME.
        </h1>

        <div id="video-container" className="w-full  py-4 ">
          <video
            className="w-full h-fit "
            autoPlay
            muted
            loop
            controls
            src={vid}
          ></video>
        </div>
      </div>

      <h3 className="text-xl xl:text-5xl text-center p-5 leading-relaxed   ">
        "Welcome to{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          ArnoldGym
        </span>
        , where fitness meets excellence! Our state-of-the-art facility offers a
        dynamic range of equipment and expert guidance to help you achieve your
        fitness goals. <br />
        From weightlifting to cardio, we've got everything you need to elevate
        your workout routine."
      </h3>
       <div
        id="trainer"
        className="w-full h-auto lg:h-screen flex flex-col lg:flex-row items-center justify-between bg-neutral-900 "
      >
        <img
          data-scroll
          data-scroll-speed="0.5"
          className="w-full overflow-hidden lg:w-auto h-auto sm:h-80 lg:h-full rounded-md lg:rounded-none"
          src={tpic}
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
      
      {/* //ladies section */}
      <div className="mt-5 my-10">
        <h2 className="text-2xl xl:text-5xl text-center">
          Arnold{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            LadiesGym
          </span>
        </h2>
        <div className="flex flex-wrap justify-center my-10">
          <div className="p-2 w-full  lg:w-1/2 lg:h-1/2">
            <div
              id="page3"
              className="flex justify-center xl:mx-8  bg-neutral-900 items-center h-fit w-full"
            >
              <div className="w-full content-center">
                <Slider {...settings}>
                  {lgym.map((testimonial, index) => (
                    <div
                      key={index}
                      className="px-5 my-5 "
                    >
                      <img
                      src={testimonial.pic}
                      alt={`User ${index}`}
                      className="mx-auto w-full max-w-screen h-auto object-contain mb-4"
                      style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {ladiesgym.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
