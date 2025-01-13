import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import EventPage from "./pages/EventPage"; // Import EventPage
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import TechnicalPage from "./pages/TechnicalPage";
import PreEvent from "./pages/PreEvent";
import NonTechnicalPage from "./pages/NonTechnicalPage";
import Workshops from "./pages/Workshops";
import IndividualWorkshops from "./pages/IndividualWorkshops";
import NoviceInit from "./pages/EventIndividual/NoviceInit";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./pages/About";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false); /* need to the userContext*/
  const [active, setActive] = useState("home"); /* need to to the userContext*/
  return (
    <BrowserRouter>
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        active={active}
        setActive={setActive}
      />
      {isMenuOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-transparent bg-opacity-50 z-40"></div>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<UserProfile />} />
        <Route path="/sponsors" element={<HomePage />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workshops/:id" element={<IndividualWorkshops />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />{" "}
        <Route path="/technical-events" element={<TechnicalPage />} />
        <Route path="/non-technical-events" element={<NonTechnicalPage />} />
        <Route path="/pre-events" element={<PreEvent />} />
        <Route path="/EventIndividual/NoviceInit" element={<NoviceInit />} />
        <Route path="/auth" element={<AuthPage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
