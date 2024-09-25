import React from "react";
import FullContainer from "../common/FullContainer";
import { Dot } from "lucide-react";
import Container from "../common/Container";

// JSON Data
const trustData = {
  heading: "Why Trust Us with Your Home?",
  listItems: [
    {
      icon: "Dot",
      text: "Expert Craftsmanship: Skilled professionals ensure top-quality service every time."
    },
    {
      icon: "Dot",
      text: "All-Inclusive Services: From plumbing to landscaping, we handle it all."
    },
    {
      icon: "Dot",
      text: "Local and Reliable: We’re always nearby, ready to help when you need us."
    },
    {
      icon: "Dot",
      text: "We’ll get the job done guaranteed."
    }
  ]
};

export default function Trust() {
  return (
    <FullContainer>
      <div className="bg-black w-full h-full flex items-center justify-center py-32">
        <div className="lg:text-center">
          {/* Main Heading */}
          <h2 className="text-3xl lg:text-5xl text-white font-bold mb-20 p-4 lg:p-0">
            {trustData.heading}
          </h2>

          {/* List Items */}
          <ul className="space-y-4 text-white lg:text-lg">
            {trustData.listItems.map((item, index) => (
              <li className="flex items-start justify-start" key={index}>
                <Dot size={30} className="mr-2" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FullContainer>
  );
}
