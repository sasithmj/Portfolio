import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero/Hero";
import ServicesSection from "../Components/Services/ServiceSection";
import AboutSection from "../Components/Aboutme/AboutSection";
import ContactSection from "../Components/Contact/ContactSection";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <div className="-z-10">
      <NavBar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
