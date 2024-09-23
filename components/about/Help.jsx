import React from "react";
import FullContainer from "../common/FullContainer";
import Image from "next/image";
import CallUs from "../common/CallUs";

export default function Help() {
  return (
    <>
      <FullContainer className="bg-black ">
        <div className=" flex items-center justify-center py-32">
          <div className="grid lg:grid-cols-2 lg:p-10 mx-auto max-w-[1200px] ">
            {/* Left Section with Text */}
            <div className="flex flex-col items-start bg-white p-10 justify-center space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-5">
                  We’re here to help
                </h2>
                <p className="text-gray-700 text-lg lg:mr-10">
                  We are a trusted provider of comprehensive home services,
                  committed to delivering expert care to homeowners nationwide.
                  Our team of skilled professionals is dedicated to maintaining
                  the highest quality standards, ensuring that every repair,
                  maintenance task, and home improvement project is completed
                  with precision and care. With our local expertise and national
                  reach, we make scheduling services easy and convenient,
                  offering reliable solutions right when you need them.
                </p>
              </div>
            </div>

            {/* Right Section for Map */}
            <div className="flex items-center justify-center">
              <Image
                src="/img/helpl.jpg"
                title="Background Image"
                height="600"
                width="600"
                alt="Image"
              />
            </div>
          </div>
        </div>

        
        <CallUs/>
      </FullContainer>
    </>
  );
}
