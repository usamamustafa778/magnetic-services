import React from "react";
import FullContainer from "../common/FullContainer";
import { Dot } from "lucide-react";
import Container from "../common/Container";

export default function HomeBanner() {
  return (
    <>
      <div className="bg-hero bg-center bg-cover">
        <div className="   bg-black/30">
          <div className="grid lg:grid-cols-banner mx-auto max-w-[1200px]   p-2  lg:py-52">
            {/* Left Section with Text */}
            <div className="flex items-center justify-center  ">
              <div>
                {/* Main Heading */}
                <h1 className=" text-3xl lg:text-5xl text-white font-bold mb-8  ">
                  Your Home, Our Priority: Expert Services at Your Doorstep
                </h1>

                {/* List Items */}
                <ul className="space-y-4 text-white lg:text-xl">
                  <li className="flex">
                    <Dot size={30} className=" mr-2" />
                    Comprehensive Home Maintenance Solutions
                  </li>
                  <li className="flex ">
                    <Dot size={30} className="mr-2" />
                    Expert Professionals for your home
                  </li>
                  <li className="flex">
                    <Dot size={30} className="mr-2" />
                    From Repairs to Renovations
                  </li>
                  <li className="flex ">
                    <Dot size={30} className="mr-2" />
                    Fast, Reliable Service You Can Trust
                  </li>
                  <li className="flex ">
                    <Dot size={30} className="mr-2" />
                    Serving Your Community with Pride
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section (Optional) */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
