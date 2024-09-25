import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { CircleCheck } from "lucide-react";
import dynamic from "next/dynamic"; // For dynamic import

const MapWithNoSSR = dynamic(() => import("../common/MapComponent"), {
  ssr: false, 
});

// JSON Data
const coverageData = {
  heading: "Nationwide Coverage",
  sections: [
    {
      icon: "CircleCheck",
      size: 64,
      color: "#ffb600",
      strokeWidth: 1.5,
      fill: "#ffb600",
      text: "Expert Services Available Wherever You Are: No matter where you live, our network of skilled professionals is ready to provide top-quality home services, ensuring your home is in the best hands."
    },
    {
      icon: "CircleCheck",
      size: 64,
      color: "#ffb600",
      strokeWidth: 1.5,
      fill: "#ffb600",
      text: "Consistent Quality Across the Country: We maintain the same high standards of service nationwide, so you can expect reliable, expert care regardless of your location."
    },
    {
      icon: "CircleCheck",
      size: 64,
      color: "#ffb600",
      strokeWidth: 1.5,
      fill: "#ffb600",
      text: "Local Expertise with National Reach: While we cover the entire country, we pride ourselves on understanding and serving the unique needs of each community we operate in, combining local knowledge with national resources."
    }
  ]
};

export default function Coverage() {
  return (
    <>
      <FullContainer className="bg-white py-10">
        <Container>
          <div className="grid lg:grid-cols-2 lg:p-10">
            {/* Left Section with Text */}
            <div className="flex flex-col items-start bg-bg p-10 justify-center space-y-10">
              <h2 className="text-3xl lg:text-5xl font-bold mb-5">
                {coverageData.heading}
              </h2>

              {coverageData.sections.map((section, index) => (
                <div key={index}>
                  <div className="flex items-start">
                    <CircleCheck
                      size={section.size}
                      color={section.color}
                      strokeWidth={section.strokeWidth}
                      fill={section.fill}
                      className="mr-4"
                    />
                    <p className="text-gray-700 text-lg lg:mr-10">{section.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section for Map */}
            <div className="h-full">
              <MapWithNoSSR />
            </div>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
