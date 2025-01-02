import React, { useState, useEffect } from "react";
import "../styles/about.css";
import "../styles/global.css";
import { Bubble } from "../components/Bubble";
import "../assets/images/logo.jpeg";
import { bubbles } from "../constants/bubbles";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Home from "../components/Home";
import Developers from "../components/Developers";
import Footer from "../components/Footer";


const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      {/* Main Section */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {bubbles.map((bubble, index) => (
          <Bubble key={index} {...bubble} />
        ))}
      </div> */}
      <div className="main bg-transparent">
        {isMenuOpen && (
          <div className="fixed inset-0 backdrop-blur-md bg-transparent bg-opacity-50 z-40"></div>
        )}
        <Home />
      </div>
      <div className="scroll-mt-12 mt-16" id="sponsors">
        <Sponsors />
      </div>
      {/* Developers Section */}
      <Developers />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
