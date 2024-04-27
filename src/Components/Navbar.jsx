import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-3xl xl:text-4xl lg:text-4xl sm:text-3xl">Arnold</span>
            <span className="text-3xl xl:text-4xl lg:text-4xl sm:text-3xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              GymProddatur
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 text-xl space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="hover:text-orange-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link
              to="/contactbox"
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md text-lg"
            >
              Join Now
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden text-2xl sm:text-2xl">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link
                    to={item.path}
                    className="hover:text-orange-500 hover:scale-105 transition-transform duration-300"
                    onClick={() => setMobileDrawerOpen(false)} 
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link
                to="/contactbox"
                className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
                onClick={() => setMobileDrawerOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
