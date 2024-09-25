import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

const industriesData = [
  {
    imgSrc: "/img/industries/Carpentry.png",
    title: "Carpentry",
  },
  {
    imgSrc: "/img/industries/Landscaping-1.png",
    title: "Landscaping",
  },
  {
    imgSrc: "/img/industries/Plumbing.png",
    title: "Plumbing",
  },
  {
    imgSrc: "/img/industries/Remodeling.png",
    title: "Remodeling",
  },
  {
    imgSrc: "/img/industries/Roffing.png",
    title: "Roofing",
  },
  {
    imgSrc: "/img/industries/HVAC-contractors.png",
    title: "HVAC Contractors",
  },
];

const additionalProjectsData = [
  {
    imgSrc: "/img/industries/Air-conditioning.png",
    title: "Air Conditioning",
  },
  {
    imgSrc: "/img/industries/Carpentry.png",
    title: "Carpentry",
  },
  {
    imgSrc: "/img/industries/cleaning.png",
    title: "Cleaning",
  },
  {
    imgSrc: "/img/industries/handyman.png",
    title: "Handyman",
  },
  {
    imgSrc: "/img/industries/Garage-door-repair.png",
    title: "Garage Door Repair",
  },
  {
    imgSrc: "/img/industries/Drywall-1.png",
    title: "Drywall",
  },
  {
    imgSrc: "/img/industries/electrician.png",
    title: "Electrician",
  },
  {
    imgSrc: "/img/industries/concrete-bag.png",
    title: "Concrete",
  },
  {
    imgSrc: "/img/industries/fencing.png",
    title: "Fencing",
  },
  {
    imgSrc: "/img/industries/flooring1.png",
    title: "Flooring",
  },
  {
    imgSrc: "/img/industries/Garage-door-instalation.png",
    title: "Garage Door Installation",
  },
  {
    imgSrc: "/img/industries/Plumbing.png",
    title: "Plumbing",
  },
  {
    imgSrc: "/img/industries/Roffing.png",
    title: "Roofing",
  },
  {
    imgSrc: "/img/industries/heating-furnace.png",
    title: "Heating & Furnace",
  },
  {
    imgSrc: "/img/industries/HVAC-contractors.png",
    title: "HVAC Contractors",
  },
  {
    imgSrc: "/img/industries/Landscaping-1.png",
    title: "Landscaping",
  },
  {
    imgSrc: "/img/industries/Remodeling.png",
    title: "Remodeling",
  },
  {
    imgSrc: "/img/industries/paiting.png",
    title: "Painting",
  },
  {
    imgSrc: "/img/industries/pest-control-1.png",
    title: "Pest Control",
  },
  {
    imgSrc: "/img/industries/FLOORING.png",
    title: "Tile",
  },
];

export default function Industries() {
  return (
    <>
      <FullContainer>
        <Container className="py-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-5xl font-semibold text-center">Industries</h2>
            <div>
              <h2 className="text-3xl font-bold py-8">Our Top Projects</h2>
              <div className="grid lg:grid-cols-6 gap-8">
                {industriesData.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-xl p-4 flex flex-col items-center justify-center text-center"
                  >
                    <Image
                      src={industry.imgSrc}
                      title={industry.title || "Background Image"}
                      height="60"
                      width="60"
                      alt={industry.title || "Image"}
                    />
                    <h3 className="text-lg font-bold mt-2">{industry.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 mx-auto max-w-[1200px]">
            <h2 className="text-3xl font-bold py-8">Our Projects</h2>

            {/* Rows of additional projects */}
            <div className="grid lg:grid-cols-4 gap-8">
              {additionalProjectsData.map((project, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image
                    src={project.imgSrc}
                    title={project.title || "Background Image"}
                    height="60"
                    width="60"
                    alt={project.title || "IMAGE"}
                  />
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
