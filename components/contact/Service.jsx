import React from "react";
import FullContainer from "../common/FullContainer";

export default function Service() {
  return (
    <>
      <FullContainer>
        <div className="mx-auto max-w-[1200px] py-10 p-4 ">
          <div className="grid lg:grid-cols-2 lg:items-stretch text-center gap-12">

            {/* Customer Service Section */}
            <div className="bg-bg p-6 lg:px-36 space-y-4 rounded-md shadow-md flex-1 flex flex-col justify-center">
              <p className="font-bold text-lg">Customer Service</p>
              <p className="text-sm">Toll Free at 888-508-2270</p>
              <p className="font-bold text-lg">Our Office Hours are:</p>
              <p className="font-semibold text-sm">9am – 5pm PST</p>
            </div>

            {/* Service Professionals Section */}
            <div className="bg-bg p-6 space-y-4 rounded-md shadow-md mt-8 lg:mt-0 flex-1 flex flex-col justify-center">
              <p className="font-bold text-lg">Service Professionals</p>
              <p className="text-sm mx-6">
                Apply for a listing and one of our team members will contact you
                shortly. Alternatively, you may call us at 888-508-2270.
              </p>
            </div>

          </div>
        </div>
      </FullContainer>
    </>
  );
}
