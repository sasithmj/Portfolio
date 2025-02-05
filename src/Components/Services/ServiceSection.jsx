import React from "react";
import { FaCogs } from "react-icons/fa";
// import { Monitor, Box, BarChart } from 'lucide-react';
import {
  FaBox,
  FaLaptop,
  FaRobot,
  FaSquareWebAwesomeStroke,
} from "react-icons/fa6";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaCogs className="w-8 h-8 text-purple-500" />,
      title: "Website Development",
      description:
        "Building responsive and dynamic websites tailored to your needs.",
    },
    {
      icon: <FaBox className="w-8 h-8 text-purple-500" />,
      title: "Mobile App Development",
      description:
        "Creating user-friendly mobile applications for Android and iOS.",
    },
    {
      icon: <FaRobot className="w-8 h-8 text-purple-500" />,
      title: "Embeded Engineering",
      description:
        "Designing and developing embedded systems for smart solutions.",
    },
    {
      icon: <FaLaptop className="w-8 h-8 text-purple-500" />,
      title: "Standalone Applications",
      description:
        "Crafting powerful desktop applications for various industries.",
    },
  ];

  return (
    <div className="bg-[#0f172a] bg-opacity-98 py-8 px-2 lg:px-16" id="Services">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 opacity-80 max-w-6xl mx-auto px-2 py-8">
        <h2 className="text-purple-500 text-lg font-medium mb-4">MY SERVICES</h2>
        <h1 className="text-white text-4xl font-bold mb-12">What I Do</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg transition-transform hover:transform hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-white text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
