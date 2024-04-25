import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-10 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ArnoldGymProddatur. All rights reserved.</p>
        <p className="text-xs sm:text-sm">Designed and created by Shaik.Khaleelulla</p>
      </div>
    </footer>
  );
};

export default Footer;
