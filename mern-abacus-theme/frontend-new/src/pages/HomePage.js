import React, { useState } from "react";
import "../styles/about.css";
import "../styles/global.css";
import "../styles/developer.css";
import "../assets/images/logo.jpeg";
import "../styles/Footer.css";
import HariniImage from "../assets/images/pic.png";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";

const developers = [
  {
    name: "Harini",
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
    name: "Viswesswar",
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

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + developers.length) % developers.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % developers.length);
  };

  return (
    <div>
      {/* Main Section */}
      <div className="main  bg-[#181720] text-gray-300">
        {isMenuOpen && (
          <div className="fixed inset-0 backdrop-blur-md bg-[#181720] bg-opacity-50 z-40"></div>
        )}
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="initial scroll-mt-28" id="home">
          <div className="div1">
            <h1 className="heading ">
              ABACUS'24 "Ideas Converge and Possibilities Unfold"
            </h1>
            <p className="press-start-2p">
              Navigating the Future, One Innovation at a Time
            </p>
            <div className="button">
              <button className="theme ">
                Innovate, Integrate, Inspire: ABACUS'24
              </button>
              <button className="contact_but">Contact Us!!</button>
            </div>
          </div>
          <div className="div2">
            <img
              className="des-1"
              src={require("../assets/images/Untitled design (6).png")}
              alt="Abacus Logo"
            />
            <img
              className="logo"
              src={require("../assets/images/logo.jpeg")}
              alt="Abacus Logo"
            />
          </div>
        </div>
        <h2>Abacus-2025</h2>
        <div className="about scroll-mt-28" id="about">
          <div className="first">
            <img
              src={require("../assets/images/logo.jpeg")}
              alt="Abacus Logo"
            />
          </div>
          <div className="second">
            <p className="vt323-regular">
              The conglomeration of the brightest minds enhancing the
              participant’s knowledge and creative potentials. The 3-day annual
              symposium showcases 15+ events and flagship contests of crystal
              gazing technology. Abacus's coverage and deliberations of earlier
              symposia have been a grand success with insatiable thirst for
              technological development rejuvenating the technology with
              innovation. This year, Abacus is back offline on a grander scale
              with an innovative edge to all the events.
            </p>
            <button className="button">Read More</button>
          </div>
        </div>
        <img
          className="w-[96em] h-[18em]"
          src={require("../assets/images/border.png")}
          alt="Abacus Logo"
        />
      </div>
      <div className="bg-[#181720] scroll-mt-28" id="sponsors">
        <Sponsors />
        <img
          className="w-[96em] h-[18em] "
          src={require("../assets/images/border.png")}
          alt="Abacus Logo"
        />
      </div>
      {/* Developers Section */}
      <div className="developers max-w-full" id="developers">
        <h2>#developers</h2>
        <div className="developers-carousel">
          {/* Previous Button */}
          <div className="carousel-button left" onClick={handlePrev}>
            ←
          </div>

      {/* Displaying the current two developer cards */}
      <div className="developer-card">
        <img
          src={developers[currentIndex].src}
          alt={developers[currentIndex].name}
          className="developer-photo"
        />
        <h3>{developers[currentIndex].name}</h3>
        <p>{developers[currentIndex].role}</p>
        <a
          href={developers[currentIndex].linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>↔ LinkedIn ↔</button>
        </a>
      </div>
      <div className="developer-card">
        <img
          src={developers[(currentIndex + 1) % developers.length].src}
          alt={developers[(currentIndex + 1) % developers.length].name}
          className="developer-photo"
        />
        <h3>{developers[(currentIndex + 1) % developers.length].name}</h3>
        <p>{developers[(currentIndex + 1) % developers.length].role}</p>
        <a
          href={developers[(currentIndex + 1) % developers.length].linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>↔ LinkedIn ↔</button>
        </a>
      </div>

      {/* Next Button */}
      <div className="carousel-button right" onClick={handleNext}>
        →
      </div>
    </div>
  </div>
  {/* Footer Section */}
  <div className="footer scroll-mt-28" id="contact">
    <span id="contact"></span>
    <div className="head">
      <h1>
        <span>#</span>
        <span>contacts</span>
      </h1>
      <div className="line"></div>
    </div>
    <div className="body">
      <div className="leftbox">
        <div className="locationbox">
          <div className="locatehead">Locate</div>
          <div className="locatebody">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.37518444508!2d80.23412206399604!3d13.011763417518218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f6aaaaaab%3A0x90dc1b9c54311d4b!2sDepartment%20Of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1659372958426!5m2!1sen!2sin"
              title="Map"
              height="200"
            ></iframe>
            <div className="college">
              <div>College of Engineering</div>
              <div>Guindy, (CEG - Anna University), Chennai 600028</div>
            </div>
          </div>
        </div>
        <div className="mediabox">
          <p>Media</p>
          <div className="icons">
            <a href="https://www.instagram.com/csea_ceg/" target="_blank">
              Instagram
            </a>
            <a href="https://www.facebook.com/csea.ceg" target="_blank">
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/csea-ceg/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="phonebox">
        <div className="phonehead">Phone</div>
        <div className="contacts">
          <div className="phonecard">
            <div>Name 1</div>
            <div>Phone Number 1</div>
          </div>
          <div className="phonecard">
            <div>Name 2</div>
            <div>Phone Number 2</div>
          </div>
        </div>
      </div>
      <div className="email-box">
        <p>Collaborate with us!</p>
        <a href="mailto:cseaceg24@gmail.com" target="_blank">
          <p>cseaceg24@gmail.com</p>
        </a>
        <a href="mailto:marketing@abacus.org.in" target="_blank">
          <p>marketing@abacus.org.in</p>
        </a>
      </div>
      <div className="querybox">
        <div>Send your Queries</div>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="title" placeholder="Title" required />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
          ></textarea>
          <button type="submit">
            Send {"<"}~{">"}
          </button>
        </form>
      </div>
    </div>
    <div className="footerline">
      &copy; Copyright 2024 CSEA. All rights reserved.
    </div>
  </div>
</div>
)}