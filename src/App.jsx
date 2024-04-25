import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Services from "./Components/Services";
import Trainer from "./Components/Trainer";
import Testimonials from "./Components/Testimonials";
import LocomotiveScroll from "locomotive-scroll";
import ContactBox from "./Components/ContactF/ContactBox.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Calculate and set the container height
    const setContainerHeight = () => {
      if (scroll && scroll.containerEl) {
        const windowHeight = window.innerHeight;
        scroll.containerEl.style.height = `${windowHeight}px`;
        scroll.update(); // Update Locomotive Scroll
        scroll.scroll(); // Scroll to the current position
      }
    };

    // Call the function to set container height when the content changes
    setContainerHeight();

    // Clean up event listener on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen" ref={scrollRef}>
        {" "}
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactbox" element={<ContactBox />} />{" "}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
