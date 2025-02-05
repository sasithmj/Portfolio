import React from "react";
import FlutterIcon from "../../assets/flutter.png";
import CssIcon from "../../assets/css.png";
import githubIcon from "../../assets/github.png";
import JsIcon from "../../assets/javascript.png";
import NodeIcon from "../../assets/nodejs.png";
import ReactIcon from "../../assets/react.png";

function TechStach() {
  const skills = [
    { name: "Flutter", icon: FlutterIcon },
    { name: "CSS", icon: CssIcon },
    { name: "Javascript", icon: JsIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "React", icon: ReactIcon },
    { name: "React Native", icon: ReactIcon },
    { name: "Github", icon: githubIcon },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-8 mt-10 bg-slate-700 w-100 rounded-lg overflow-hidden">
        <div className="flex justify-center gap-24 flex-nowrap animate-marquee whitespace-nowrap">
          {/* Render Skills with Unique Keys */}
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index} // Use index as key to ensure uniqueness
              className="text-gray-400 hover:text-coral-500 transition-colors cursor-pointer flex"
            >
              <img src={skill.icon} alt={skill.name} width={24} height={24} />

              <div className="font-bold text-lg px-3">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStach;
