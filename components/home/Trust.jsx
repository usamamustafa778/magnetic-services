import React from "react";
import FullContainer from "../common/FullContainer";
import { Dot } from "lucide-react";
import Container from "../common/Container";

export default function Trust() {
  return (
    <>
      <FullContainer>
        <div className="bg-black w-full h-full flex items-center justify-center py-32">
          <div className=" lg:text-center">
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-5xl text-white font-bold mb-20 p-4 lg:p-0 ">
              Why Trust Us with Your Home?
            </h2>
            <div>


            {/* List Items */}
            <ul className="space-y-4 text-white lg:text-lg">
              <li className="flex items-start  justify-start">
                <Dot size={30} className="mr-2" />
                Expert Craftsmanship: Skilled professionals ensure top-quality
                service every time.
              </li>
              <li className="flex items-start justify-start">
                <Dot size={30} className="mr-2" />
                All-Inclusive Services: From plumbing to landscaping, we handle
                it all.
              </li>
              <li className="flex items-start justify-start">
                <Dot size={30} className="mr-2" />
                Local and Reliable: We’re always nearby, ready to help when you
                need us.
              </li>
              <li className="flex items-start justify-start">
                <Dot size={30} className="mr-2" />
                We’ll get the job done guaranteed.
              </li>
            </ul>
            </div>

          </div>
        </div>
      </FullContainer>
    </>
  );
}
