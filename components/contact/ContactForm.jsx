import React from "react";
import FullContainer from "../common/FullContainer";
import Image from "next/image";

export default function ContactForm() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] ">
        <div className=" py-10 grid grid-cols-1 lg:grid-cols-form gap-12 p-4  ">
          {/* Left Grid: Image and Contact Information */}
          <div className="space-y-6 text-center lg:text-left bg-black lg:h-2/3   ">
            <Image
              src="/img/tele-img4.jpg" // Replace with your image URL
              title="Image"
              width="400"
              height="400"
              alt="Contact Us"
              className="w-full h-auto rshadow-md"
            />
            <div className=" p-7 space-y-2 ">
              <p className="text-3xl  text-white font-bold">Call Us</p>
              <p className="  text-white font-semibold">
                24/7 emergency callout
              </p>
              <p className=" text-gray-300 "> 888-508-2270</p>
            </div>
          </div>

          {/* Right Grid: Form */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">How Can We Help You?</h2>

            {/* First Row: First Name and Last Name */}
            <div className="  lg:flex lg:space-x-6">
              <div className="flex-1">
                <label className="block font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-md"
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-md"
                />
              </div>
            </div>

            {/* Second Row: Email and Telephone */}
            <div className="lg:flex lg:space-x-6">
              <div className="flex-1">
                <label className="block font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-3 rounded-md"
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-2">Telephone</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 p-3 rounded-md"
                />
              </div>
            </div>

            {/* Third Row: Radio Buttons for Services */}
            <div>
              <p className="font-semibold mb-2">
                What Are You Interested In? *
              </p>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="service" className="mr-2" />
                  Service 1
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="service" className="mr-2" />
                  Service 2
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="service" className="mr-2" />
                  Service 3
                </label>
              </div>
            </div>

            {/* Fourth Row: Message Area */}
            <div>
              <label className="block font-semibold mb-2">Your Message</label>
              <textarea
                className="w-full border border-gray-300 p-3 rounded-md"
                rows="4"
              ></textarea>
            </div>

            <div className="lg:flex  ">
              {/* Submit Button */}
              <div className="">
                <button className="bg-nav text-black px-6 py-3 rounded-full font-semibold">
                  Submit
                </button>
              </div>
              <div className=" lg:ml-44 text-sm my-4 lg:my-0 ">
                <p>
                  By clicking on the Submit button above, you consent,
                  acknowledge, and agree to the following:
                </p>
                <p>
                  - Our Acceptable Use Policy, Privacy Policy and to receive
                  important notices and other communications electronically.
                </p>
                <p>
                  - We take your privacy seriously. You are providing express
                  written consent to share your information with us and
                  authorize us to call you via telephone, mobile device
                  (including SMS and MMS - charges may apply) and/or email, even
                  if your telephone number is currently listed on any internal,
                  corporate, state, federal or national Do-Not-Call (DNC) list.
                  - Consent is not required as a condition to utilize Magnetic
                  Services, and you may choose to be contacted by an individual
                  customer care representative(s) by calling 1-888-508-2270
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
