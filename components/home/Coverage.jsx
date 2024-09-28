import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { CircleCheck } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic import of Map component without SSR
const MapWithNoSSR = dynamic(() => import("../common/MapComponent"), {
  ssr: false,
});

// JSON Data
const coverageData = {
  heading: "Nationwide Coverage",
  sections: [
    {
      icon: CircleCheck,
      size: 64,
      color: "#ffb600",
      strokeWidth: 1.5,
      fill: "#ffb600",
      text: "Expert Services Available Wherever You Are: No matter where you live, our network of skilled professionals is ready to provide top-quality home services, ensuring your home is in the best hands.",
    },
    {
      icon: CircleCheck,
      size: 64,
      color: "#ffb600",
      strokeWidth: 1.5,
      fill: "#ffb600",
      text: "Consistent Quality Across the Country: We maintain the same high standards of service nationwide, so you can expect reliable, expert care regardless of your location.",
    },
    {
      icon: CircleCheck,
      size: 64,
      color: "#ffb600",
      strokeWidth: 1.5,
      fill: "#ffb600",
      text: "Local Expertise with National Reach: While we cover the entire country, we pride ourselves on understanding and serving the unique needs of each community we operate in, combining local knowledge with national resources.",
    },
  ],
};

// Component for individual coverage section
const CoverageSection = ({ heading, sections }) => (
  <div className="flex flex-col items-start p-10 justify-center">
    <h2 className="text-3xl lg:text-5xl font-bold mb-5">{heading}</h2>
    {sections.map((section, index) => (
      <IconText key={index} {...section} />
    ))}
  </div>
);

// Component for rendering icon and text
const IconText = ({ icon: Icon, size, color, strokeWidth, fill, text }) => (
  <div className="flex items-start">
    <Icon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      fill={fill}
      className="mr-4"
    />
    <p className="text-gray-700 text-lg lg:mr-10">{text}</p>
  </div>
);

export default function Coverage() {
  return (
    <FullContainer className="bg-white py-20">
      <Container>
        <div className="grid lg:grid-cols-2">
          <CoverageSection
            heading={coverageData.heading}
            sections={coverageData.sections}
          />
          <div className="h-full">
            <MapWithNoSSR />
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
