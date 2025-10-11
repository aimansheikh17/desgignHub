import React from "react";
import { Routes, Route } from "react-router-dom";

import NavbarPage from "./components/NavbarPage";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import SolutionsSection from "./components/Solution";
import OurWorks from "./components/OurWorks";
import VisionSection from "./components/VisionSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";

// Pages
import WebDevelopment from "./pages/WebDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";

export default function App() {
  return (
    <>
      <NavbarPage />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <AboutUs />
              <Services />
              <SolutionsSection />
              <OurWorks />
              <VisionSection />
              <Contact />
              <WhyChooseUs />
            </>
          }
        />

        {/* Web Development Page */}
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
      </Routes>

      <Footer />
    </>
  );
}

