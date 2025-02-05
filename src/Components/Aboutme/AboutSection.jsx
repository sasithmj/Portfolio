import React from "react";
// import { Code, Smartphone, Cpu } from 'lucide-react';

const AboutSection = () => {
  //   const skills = [
  //     {
  //       icon: <Code className="w-6 h-6 text-pink-500" />,
  //       title: "Web Development",
  //       tech: "React • Next.js • Tailwind",
  //     },
  //     {
  //       icon: <Smartphone className="w-6 h-6 text-pink-500" />,
  //       title: "Mobile Development",
  //       tech: "Flutter • React Native",
  //     },
  //     {
  //       icon: <Cpu className="w-6 h-6 text-pink-500" />,
  //       title: "Embedded Engineering",
  //       tech: "Arduino • IoT • Electronics",
  //     },
  //   ];

  return (
    <div className="bg-gray-900 py-16" id="About">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-5 mt-10">
        <div className="text-left mb-12">
          <h2 className="text-purple-500 text-lg font-medium mb-4">
            Know
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h1>
        </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Passionate Full-Stack Developer specializing in modern web and
              mobile development, with a unique background in embedded systems
              engineering. I transform creative ideas into scalable digital
              solutions, focusing on creating seamless user experiences across
              different platforms.
            </p>
            <p>
              As a web developer, I excel in building responsive and dynamic
              applications using React and its ecosystem, crafting efficient and
              maintainable code that delivers outstanding user experiences. My
              expertise extends to mobile development, where I leverage both
              Flutter and React Native to create cross-platform applications
              that maintain native-like performance and feel.
            </p>
            <p>
              I also have foundational knowledge in embedded systems, where I've
              worked with Arduino and basic IoT projects, adding a valuable
              hardware perspective to my development toolkit.
            </p>
          </div>
        </div>
        {/* 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {skill.tech}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
