import React from "react";
import spon1 from "../assets/Sponsors/spon11.jpg";
import spon3 from "../assets/Sponsors/tmb.png";
import e2w from "../assets/Reach/e2w.png";
//import "../styles/Navbar.css";

const Sponsors = () => {
  const sponsors = [
    { image: spon1, name: "Motorq", desc: "Title Sponsor" },
    { image: e2w, name: "E2W STUDY", desc: "Educational Sponsor" },
    { image: spon3, name: "TMB", desc: "REACH'24 Sponsor" },
  ];

  return (
    <div className="bg-[#f0f0f0] p-6" id="sponsors">
      <h1 className="text-4xl font-bold text-black text-center mb-8 overflow-hidden">
        Sponsors
      </h1>
      <div className="flex flex-col justify-between lg:flex-row mx-auto overflow-clip bg-[#f0f0f0] w-[100%]">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className=" bg-black text-[#f0f0f0] shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-95 hover:shadow-2xl overflow-hidden border border-transparent mx-auto lg:w-[33%] w-[90%] m-2 animated-border-box ease-in-out transition"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-glow "></div>
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
            </div>
            <div class="border-t-2 border-b-2 border-gray-400 h-1 w-[90%]"></div>

            <h2 className="text-lg font-bold mb-2 z-10">{sponsor.name}</h2>
          </div>
        ))}
      </div>
      <div className=" w-[100%] flex justify-center mt-4">
        <button className="bg-black text-[#f0f0f0] rounded-none p-5 font-sm hover:font-semibold  hover:text-gray-950 hover:bg-[#f0f0f0] border border-solid border-black transition delay-50 ease-linear">
          Read More{" "}
        </button>
      </div>
    </div>
  );
};

export default Sponsors;