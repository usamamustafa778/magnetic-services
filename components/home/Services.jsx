import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
export default function Services() {
  return (
    <>
      <FullContainer className="bg-bg">
        <Container>
          <h2 className=" text-4xl lg:text-5xl font-bold  py-14 lg:py-20 ">
            Comprehensive Home Services for Every Need
          </h2>
          <div className="grid lg:grid-cols-2 gap-16    lg:p-10 ">
            {/* Left Section with Text */}
            <div className="flex items-center justify-center  ">
              <div>
                {/* Main Heading */}
                <h2 className=" text-3xl lg:text-5xl font-bold mb-5 lg:mb-20  ">
                  Home is Where We Excel
                </h2>
                <p className=" text-gray-600 text-lg lg:mr-10 ">
                  We understand that your home is your sanctuary, and that’s why
                  we’re committed to providing top-tier services that enhance
                  and protect it. From essential repairs to comprehensive
                  renovations, our team excels in every aspect of home
                  improvement. With a deep understanding of what makes a house a
                  home, we approach each project with the care and precision it
                  deserves. Our skilled professionals bring a wealth of
                  experience and expertise, ensuring that every job, no matter
                  the size, is completed to the highest standards. Whether
                  you’re looking to refresh your space or address critical
                  maintenance issues, you can trust us to deliver results that
                  not only meet but exceed your expectations.
                </p>
              </div>
            </div>

            {/* Right Section (Optional) */}
            <div>
              <Image
                src="/img/home/house.jpg"
                title="Background Image"
                height="600"
                width="600"
                alt="Image"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16  mt-10  lg:p-10 ">
            {/* Left Section with Text */}

            <div>
              <Image
                src="/img/home/female-client-shaking-hand.jpg"
                title="Background Image"
                height="600"
                width="600"
                alt="Image"
              />
            </div>

            {/* Right Section (Optional) */}

            <div className="flex items-center justify-center  ">
              <div>
                {/* Main Heading */}
                <h2 className=" text-3xl lg:text-5xl font-bold  mb-6 lg:mb-20  ">
                  Reliable, Local Expertise
                </h2>
                <p className=" text-gray-600 text-lg lg:mr-10 ">
                  Our mission is to provide exceptional home services that you
                  can rely on. We believe in delivering more than just a
                  service—we deliver peace of mind. Our team of skilled
                  professionals is committed to exceeding your expectations by
                  focusing on quality workmanship, clear communication, and
                  personalized solutions tailored to your unique needs. We
                  continuously strive for excellence, staying ahead of industry
                  trends to offer you the most effective and efficient services
                  available. Whether it’s a small repair or a major project, you
                  can count on us to treat your home with the utmost care and
                  respect, ensuring your complete satisfaction every step of the
                  way.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16   mt-10   lg:p-10 ">
            {/* Left Section with Text */}
            <div className="flex items-center justify-center  ">
              <div>
                {/* Main Heading */}
                <h2 className=" text-3xl lg:text-5xl font-bold mb-6 lg:mb-20  ">
                  Live Comfortably. Locally Served.
                </h2>
                <p className=" text-gray-600 text-lg lg:mr-10 ">
                  We pride ourselves on being the go-to home services provider
                  in your community. Our approach is simple: we are right where
                  you need us, whenever you need us. By focusing on local
                  services, we ensure that our expert professionals are always
                  geographically accessible and ready to cater to your specific
                  needs. Whether it’s a minor repair or a major renovation, our
                  team is just around the corner, bringing convenience and peace
                  of mind to homeowners. With our comprehensive service
                  offerings, you can trust that we’ll handle everything with the
                  expertise and care that only a local provider can offer.
                </p>
              </div>
            </div>

            {/* Right Section (Optional) */}
            <div>
              <Image
                src="/img/home/community.jpg"
                title="Background Image"
                height="600"
                width="600"
                alt="Image"
              />
            </div>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
