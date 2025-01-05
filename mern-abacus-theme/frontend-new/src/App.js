import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage"; // Import EventPage
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import TechnicalPage from "./pages/TechnicalPage";
import PreEvent from "./pages/PreEvent";
import NonTechnicalPage from "./pages/NonTechnicalPage";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  return (
    <BrowserRouter>
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        active={active}
        setActive={setActive}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/sponsors" element={<HomePage />} />
        <Route path="/workshops" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />{" "}
        <Route path="/technical-events" element={<TechnicalPage />} />
        <Route path="/non-technical-events" element={<NonTechnicalPage />} />
        <Route path="/pre-events" element={<PreEvent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
