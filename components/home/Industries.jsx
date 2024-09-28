import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

// Industries data
const industriesData = [
  { imgSrc: "/img/industries/Carpentry.png", title: "Carpentry" },
  { imgSrc: "/img/industries/Landscaping-1.png", title: "Landscaping" },
  { imgSrc: "/img/industries/Plumbing.png", title: "Plumbing" },
  { imgSrc: "/img/industries/Remodeling.png", title: "Remodeling" },
  { imgSrc: "/img/industries/Roffing.png", title: "Roofing" },
  { imgSrc: "/img/industries/HVAC-contractors.png", title: "HVAC Contractors" },
];

// Additional projects data
const additionalProjectsData = [
  { imgSrc: "/img/industries/Air-conditioning.png", title: "Air Conditioning" },
  { imgSrc: "/img/industries/Carpentry.png", title: "Carpentry" },
  { imgSrc: "/img/industries/cleaning.png", title: "Cleaning" },
  { imgSrc: "/img/industries/handyman.png", title: "Handyman" },
  {
    imgSrc: "/img/industries/Garage-door-repair.png",
    title: "Garage Door Repair",
  },
  { imgSrc: "/img/industries/Drywall-1.png", title: "Drywall" },
  { imgSrc: "/img/industries/electrician.png", title: "Electrician" },
  { imgSrc: "/img/industries/concrete-bag.png", title: "Concrete" },
  { imgSrc: "/img/industries/fencing.png", title: "Fencing" },
  { imgSrc: "/img/industries/flooring1.png", title: "Flooring" },
  {
    imgSrc: "/img/industries/Garage-door-instalation.png",
    title: "Garage Door Installation",
  },
  { imgSrc: "/img/industries/Plumbing.png", title: "Plumbing" },
  { imgSrc: "/img/industries/Roffing.png", title: "Roofing" },
  { imgSrc: "/img/industries/heating-furnace.png", title: "Heating & Furnace" },
  { imgSrc: "/img/industries/HVAC-contractors.png", title: "HVAC Contractors" },
  { imgSrc: "/img/industries/Landscaping-1.png", title: "Landscaping" },
  { imgSrc: "/img/industries/Remodeling.png", title: "Remodeling" },
  { imgSrc: "/img/industries/paiting.png", title: "Painting" },
  { imgSrc: "/img/industries/pest-control-1.png", title: "Pest Control" },
  { imgSrc: "/img/industries/FLOORING.png", title: "Tile" },
];

// Reusable Industry Card Component
const IndustryCard = ({ imgSrc, title }) => (
  <div className="bg-white shadow-xl px-5 py-3 flex flex-col items-center justify-center text-center rounded-lg">
    <Image
      src={imgSrc}
      title={title || "Background Image"}
      height={50}
      width={50}
      alt={title || "Image"}
      className="w-14 h-14 mt-3"
    />
    <h3 className="font-semibold mt-4">{title}</h3>
  </div>
);

// Reusable Project List Component
const ProjectList = ({ data, columns }) => (
  <div className={`grid lg:grid-cols-5 gap-4 w-full`}>
    {data.map((item, index) => (
      <IndustryCard key={index} imgSrc={item.imgSrc} title={item.title} />
    ))}
  </div>
);

export default function Industries() {
  return (
    <FullContainer>
      <Container className="py-14">
        <h2 className="text-4xl font-bold text-center mb-5">
          Industries We Work In
        </h2>
        <ProjectList data={additionalProjectsData} />
      </Container>
    </FullContainer>
  );
}
