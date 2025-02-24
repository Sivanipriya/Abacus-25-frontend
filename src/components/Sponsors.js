import React from "react";
import spon1 from "../assets/Sponsors/spon11.jpg";
import spon3 from "../assets/Sponsors/tmb.png";
import e2w from "../assets/Reach/e2w.png";
import IndividualSponsors from "../pages/IndividualSponsors";
import { Link } from "react-router-dom";
//import "../styles/Navbar.css";

const Sponsors = () => {
  const sponsors = [
    { image: spon1, name: "Motorq", desc: "Title Sponsor" },
    { image: e2w, name: "E2W STUDY", desc: "Educational Sponsor" },
    { image: spon3, name: "TMB", desc: "REACH'25 Sponsor" },
  ];

  return (
    <div className="bg-black font-serif p-6 mb-3" id="sponsors">
      <h1 className="my-5 text-5xl font-bold text-[#fcfcfc] text-center mb-8 overflow-hidden [text-shadow:6px_2px_4px_#c03e3e]">
        Sponsors
      </h1>

      <div className="flex flex-col justify-between lg:flex-row mx-auto overflow-clip bg-black w-[100%]">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className=" bg-[#181720] bg-gradient-to-br from-[#000000] via-[#5a1414] to-[#bc4040]  text-[#f0f0f0] rounded-lg py- px-2 flex flex-col items-center  transform hover:scale-95 hover:shadow-2xl overflow-hidden  border-transparent mx-auto lg:w-[32%] w-[90%]  animated-border-box ease-in-out transition  border-solid  border-2 shadow-md shadow-[#d2c4fdba] m-3 p-6"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#e0e0e0ea] to-transparent animate-glow "></div>
            <p className="text-xl text-gray-300 text-center z-10 font-bold ">
              {sponsor.desc}
            </p>
            <div class="border-t-2 border-b-2 border-gray-400 h-1 w-[90%]"></div>

            <div className="rounded-lg ">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full h-32 object-cover mb-4 rounded-2xl z-10 p-2 m-2"
              />
              {/* <div class="absolute inset-0 bg-gray-200 mix-blend-multiply"></div> */}
            </div>
            <div class="border-t-2 border-b-2 border-gray-400 h-1 w-[90%]"></div>

            <h2 className="text-lg font-bold mb-2 z-10">{sponsor.name}</h2>
          </div>
        ))}
      </div>
      <div className=" w-[100%] flex justify-center mt-4">
        <Link
          to={"/individual-sponsors"}
          className="mt-10 mb-6 px-6 py-4 bg-gradient-to-br from-red-300 via-red-500 to-red-800 text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow focus:outline-none focus:shadow-[0_0_15px_rgba(255,223,47,0.8)]"
        >
          Read More{" "}
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
