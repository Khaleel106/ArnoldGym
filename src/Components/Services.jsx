import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function loadingAnimation() {
  gsap.from("h2", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
  });
  gsap.from("#page2", {
    scale: 0.9,
    opacity: 0,
    delay: 1,
    duration: 0.5,
  });
}

const Services = () => {
  useGSAP(() => {
    loadingAnimation();
  }, []);
  const [serviceImages] = useState([
    {
      image: "src/assets/brett-jordan-U2q73PfHFpM-unsplash.jpg",
      name: "ModernEquipment",
    },
    {
      image: "src/assets/kevin-woblick-LRamvPjq5Ho-unsplash.jpg",
      name: "HQ music",
    },
    {
      image: "src/assets/image.png",
      name: "AirConditioned",
    },
  ]);
  const [divs] = useState([
    {
      id: 1,
      text: "MuscleBuilding",
      image: "src/assets/pic1.jpg",
    },
    {
      id: 2,
      text: "Athletics",
      image: "src/assets/karsten-winegeart-0Wra5YYVQJE-unsplash.jpg",
    },
    {
      id: 3,
      text: "fatLoss",
      image: "src/assets/towfiqu-barbhuiya-J6g_szOtMF4-unsplash.jpg",
    },
    {
      id: 4,
      text: "Calistenics",
      image: "src/assets/gordon-cowie-ISg1JhN_vFk-unsplash.jpg",
    },
    {
      id: 5,
      text: "WeightLoss",
      image: "src/assets/i-yunmai-5jctAMjz21A-unsplash.jpg",
    },
    {
      id: 6,
      text: "PowerLifting",
      image: "src/assets/anastase-maragos-9dzWZQWZMdE-unsplash.jpg",
    },
  ]);

  return (
    <div>
      <h2 className="text-center text-2xl xl:text-5xl mt-5 ">
        Facilities{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Provided
        </span>
      </h2>

      <div
        id="page2"
        className="h-screen w-full relative flex items-center justify-between px-3 py-4 rounded-md"
      >
        {serviceImages.map((image, index) => (
          <div
            key={index}
            className="elem h-full flex justify-center items-center overflow-hidden rounded-md "
          >
            <img
              data-scroll
              data-scroll-speed="1"
              src={image.image}
              alt="gympics"
              className="w-full h-full object-cover  "
            />
            <div
              data-scroll
              data-scroll-speed="-1"
              className="dets absolute w-60 h-8 text-center rounded-2xl  text-black  bg-white text-xl"
            >
              {image.name}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm">note:images are meant for illustration only</p>

      <div>
        <h2 className="text-center text-3xl xl:text-5xl lg:text-5xl mb-6 py-4">
          Training{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Protocols
          </span>
        </h2>
        {divs.length > 0 && (
          <div className="mx-auto overflow-x-auto whitespace-nowrap sm:overflow-x-visible h-full lg:overflow-x-visible xl:flex xl:items-center bg-neutral-900 xl:justify-around xl:flex-wrap xl:w-screen md:overflow-x-visible ">
            {divs.map((div) => (
              <div
                key={div.id}
                className="inline-block py-7 rounded-xl xl:w-96 w-80 mb-6 xl:h-72 h-64  mr-4 cursor-pointer hover:scale-105 transition-transform duration-300 "
              >
                <img
                  className="w-full h-full rounded-xl"
                  src={div.image}
                  alt=""
                />
                <h2 className="text-center text-3xl bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text  ">
                  {div.text}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
