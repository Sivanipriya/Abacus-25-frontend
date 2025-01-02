import HariniImage from "../assets/images/pic.png";
import "../styles/developer.css";
import React, { useState, useEffect } from "react";
const developers = [
  {
    name: "Harini Natarajan",
    role: "//Frontend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/harini-natarajan",
  },
  {
    name: "Sivanipriya",
    role: "//Frontend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/sivanipriya",
  },
  {
    name: "Visvesswar",
    role: "//Backend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/visvesswaram",
  },
  {
    name: "Lakshay",
    role: "//Backend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/lakshay",
  },
];

const Developers = () => {
  const [visibleDevelopers, setVisibleDevelopers] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);
  const currentDevelopers = [];
  for (let i = 0; i < visibleDevelopers; i++) {
    currentDevelopers.push(developers[(currentIndex + i) % developers.length]);
  }
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + developers.length) % developers.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % developers.length);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        setVisibleDevelopers(4); // Desktop view
        setShowCarousel(false);
      } else if (width > 768) {
        setVisibleDevelopers(3); // Tablet view
        setShowCarousel(true); // Show carousel buttons
      } else if (width > 480) {
        setVisibleDevelopers(2); // Smaller tablet
        setShowCarousel(true); // Show carousel buttons
      } else {
        setVisibleDevelopers(1); // Mobile view
        setShowCarousel(true); // Show carousel buttons
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="developers" id="developers">
        <h2>#developers</h2>
        <div className="developers-carousel">
          {/* Map through currentDevelopers */}
          {currentDevelopers.map((developer, index) => (
            <div key={index} className="developer-card">
              <img
                src={developer.src}
                alt={developer.name}
                className="developer-photo"
              />
              <h3>{developer.name}</h3>
              <p>{developer.role}</p>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>↔ LinkedIn ↔</button>
              </a>
            </div>
          ))}

          {/* Show carousel buttons on smaller screens */}
          {showCarousel && (
            <>
              <div className="carousel-button left" onClick={handlePrev}>
                ←
              </div>
              <div className="carousel-button right" onClick={handleNext}>
                →
              </div>
            </>
          )}
        </div>
      </div>
  );
};
export default Developers;
