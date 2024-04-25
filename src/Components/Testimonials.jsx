import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Testimonials } from "../constants/index.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function loadingAnimation() {
  gsap.from("h2", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
  });
  gsap.from("h3", {
    y: 100,
    opacity: 0,
    delay: 0.7,
    duration: 0.5,
  });
  gsap.from("#page3", {
    scale: 0.9,
    opacity: 0,
    delay: 1,
    duration: 0.5,
  });
}

const Testimonial = () => {
  useGSAP(() => {
    loadingAnimation();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipe:true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
   <div>
    <h2 className="text-center text-xl xl:text-5xl mt-5 mb-5">Real <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>stories</span> </h2>
    <h3 className='text-center text-lg xl:text-5xl my-5 '>"Every transformation tells a unique story. Gratefull for the journey and the opportunity to make a positive impact"</h3>
     <div id='page3' className="flex justify-center bg-neutral-900 items-center h-screen">
      <div className="w-[90%] h-full py-5 content-center">
        <Slider {...settings}>
          {Testimonials.map((testimonial, index) => (
            <div key={index} className="px-5 my-5 shadow-md rounded-xl shadow-orange-500 "> 
              <img src={testimonial.image} alt={`User ${index}`} className="mx-auto w-[100%] h-[70%] mb-4" />
              <p className="text-left xl:text-lg text-xs ">{testimonial.test}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
   </div>
  );
};

export default Testimonial;
