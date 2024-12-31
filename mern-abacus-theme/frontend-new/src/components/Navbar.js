import { useState, useEffect } from "react";
import abacus_img from "../assets/images/logo.jpeg";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [active, setActive] = useState("home");
  //const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "home", label: "/ home" },
    { name: "about", label: "/ about" },
    { name: "sponsors", label: "/ sponsors" },
    { name: "events", label: "/ events" },
    { name: "workshops", label: "/ workshops" },
    { name: "login", label: "/ login" },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [isMenuOpen]);
  

  return (
    <div
      className={`fixed  w-screen flex flex-row justify-between lg:px-6 lg:py-3 text-white bg-gradient-to-r from-gray-950 via-gray-800 via-gray-700 to-gray-950 shadow-2xl z-50 
        ${isMenuOpen ? " overflow-y-scroll " : "visible"}
      `}
    >
      <div
        className={`flex flex-row rounded-lg mx-4   delay-200 transform ease-in-out ${
          isMenuOpen ? " hidden " : "visible"
        }`}
      >
        <a href="#home">
          <img
            src={abacus_img}
            alt="abacus-image"
            className="h-14 w-14 mx-auto p-1"
          />
        </a>
        <a href="#home" className="my-auto">
          <h1 className="hover:text-gray-950 hover:bg-white font-semibold rounded-xl mx-2 p-2 cursor-pointer">
            Abacus 2025
          </h1>
        </a>
      </div>

      <button
        className={`lg:hidden p-2 text-white ${
          isMenuOpen ? " hidden " : "visible"
        }`}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`flex lg:space-x-4 items-center justify-center overflow-hidden lg:static lg:transform-none flex-col lg:flex-row  lg:h-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "block transform translate-x-0 bg-gradient-to-r from-gray-950 via-gray-800 via-gray-700 to-gray-950 lg:bg-transparent fixed top-10 left-0  w-[70%] h-[40%] mx-[15%] mt-[15%] rounded-2xl"
            : "transform -translate-x-full hidden lg:block my-auto absolute"
        }`}
      >
        <button
          className="absolute top-5 right-5 lg:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {navItems.map((item) => (
          <button
            key={item.name}
            className="relative group overflow-hidden rounded-xl m-2 lg:m-0"
            onClick={() => {
              setActive(item.name);
              setIsMenuOpen(false);
            }}
          >
            <a
              href={`#${item.name}`}
              className={`p-2 rounded-xl transition-all duration-300 ${
                active === item.name
                  ? "bg-white text-black hover:text-black"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </a>
            <span className="absolute left-0 bottom-0 h-1 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
