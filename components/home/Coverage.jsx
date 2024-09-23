import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { CircleCheck } from "lucide-react";
import dynamic from "next/dynamic"; // For dynamic import

// Dynamically import MapContainer and related components from react-leaflet
const MapWithNoSSR = dynamic(() => import("../common/MapComponent"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Coverage() {
  return (
    <>
      <FullContainer className="bg-white py-10 ">
        <Container>
          <div className="grid lg:grid-cols-2 lg:p-10">
            {/* Left Section with Text */}
            <div className="flex flex-col items-start bg-bg p-10 justify-center space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-5">
                  Nationwide Coverage
                </h2>
                <div className="flex items-start">
                  <CircleCheck
                    size={64} // Increased size
                    color="#ffb600" // Outline color
                    strokeWidth={1.5} // Optionally adjust stroke width
                    fill="#ffb600" // Fill color inside the icon
                    className="mr-4"
                  />
                  <p className="text-gray-700 text-lg lg:mr-10">
                    Expert Services Available Wherever You Are: No matter where
                    you live, our network of skilled professionals is ready to
                    provide top-quality home services, ensuring your home is in
                    the best hands.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <div className="flex items-start">
                  <CircleCheck
                    size={64} // Increased size
                    color="#ffb600"
                    strokeWidth={1.5}
                    fill="#ffb600"
                    className="mr-4"
                  />
                  <p className="text-gray-700 text-lg lg:mr-10">
                    Consistent Quality Across the Country: We maintain the same
                    high standards of service nationwide, so you can expect
                    reliable, expert care regardless of your location.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <div className="flex items-start">
                  <CircleCheck
                    size={64} // Increased size
                    color="#ffb600"
                    strokeWidth={1.5}
                    fill="#ffb600"
                    className="mr-4"
                  />
                  <p className="text-gray-700 text-lg lg:mr-10">
                    Local Expertise with National Reach: While we cover the
                    entire country, we pride ourselves on understanding and
                    serving the unique needs of each community we operate in,
                    combining local knowledge with national resources.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section for Map */}
            <div className=" h-full ">
              {/* Dynamically load the Map component */}
              <MapWithNoSSR />
            </div>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
