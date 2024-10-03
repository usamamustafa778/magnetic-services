import React, { useState } from "react";
import Link from "next/link";
import CallUs from "./CallUs";

const ServiceDropdown = ({ isDropdownOpen, toggleDropdown }) => (
  <div>
    <button
      className="bg-white text-black border px-4 py-2 rounded"
      onClick={toggleDropdown}
    >
      Select Service
    </button>
    {isDropdownOpen && (
      <ul className="bg-white mt-2 p-2 rounded shadow-lg">
        {["Plumbing", "Carpentry", "Landscaping", "Electrical"].map(
          (service, index) => (
            <li key={index} className="py-1 cursor-pointer">
              {service}
            </li>
          )
        )}
      </ul>
    )}
  </div>
);

const InputField = ({ label, placeholder }) => (
  <div className="flex flex-col mb-2 lg:mb-0">
    <p className="text-lg">{label}</p>
    <input
      type="text"
      className="px-4 py-2 rounded bg-white border"
      placeholder={placeholder}
    />
  </div>
);

const FooterService = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto py-24 px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-20">
          Find a Magnetic Services Location
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
          <div>
            <p>
              Get the location near you right to your phone. Fast, easy, and
              commitment-free.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services Needed</h3>
            <ServiceDropdown
              isDropdownOpen={isDropdownOpen}
              toggleDropdown={toggleDropdown}
            />
            <div className="text-black flex justify-center items-center font-semibold bg-nav rounded-full mx-24 lg:mx-0 lg:w-24 p-2 mt-7">
              <Link
                className="flex justify-center items-center"
                title="Get A Pro"
                href="/"
              >
                Get a Pro
              </Link>
            </div>
          </div>

          {/* Contact Information Block */}
          <div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
              <InputField label="Zip Code" placeholder="Enter your zip code" />
              <InputField
                label="Mobile Number"
                placeholder="Enter your number"
              />
            </div>
            <p className="text-sm mt-4">
              By clicking on the Get a Pro button above, you consent,
              acknowledge, and agree to the following: - Our Acceptable Use
              Policy, Privacy Policy, and to receive important notices and other
              communications electronically. We take your privacy seriously. You
              are providing express written consent to share your information
              with us and authorize us to call you via telephone, mobile device
              (including SMS and MMS - charges may apply) and/or email, even if
              your telephone number is currently listed on any internal,
              corporate, state, federal, or national Do-Not-Call (DNC) list.
              Consent is not required as a condition to utilize Magnetic
              Services, and you may choose to be contacted by an individual
              customer care representative(s) by calling 1-888-508-2270.
            </p>
          </div>
        </div>
      </div>

      <CallUs />
    </footer>
  );
};

export default FooterService;
