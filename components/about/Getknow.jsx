import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

export default function Getknow() {
  return (
    <FullContainer>
      <Container>
        <div className="text-center space-y-12  my-12 mx-auto max-w-[1200px]   lg:px-60  ">
          <div>
            <p className=" text-sm font-bold ">GET TO KNOW US</p>
            <h2 className="text-4xl font-semibold ">
              Honesty, integrity & experience
            </h2>
          </div>
          <p className=" text-lg ">
            At Magnetic Services, we are dedicated to providing comprehensive
            home services that homeowners can trust. With a deep commitment to
            honesty, integrity, and quality, we’ve built a reputation for
            excellence in every community we serve. Our team of skilled
            professionals is passionate about delivering top-notch workmanship,
            whether it’s a simple repair or a complete home renovation.
          </p>

          <p className=" text-lg ">
            We believe that your home is your most valuable asset, and our
            mission is to help you maintain and enhance it. By focusing on the
            needs of our customers, we provide a range of services that ensure
            your home remains safe, comfortable, and beautiful. From carpentry
            and plumbing to HVAC and landscaping, we cover every aspect of home
            maintenance and improvement with the highest standards of care and
            expertise.
          </p>

          <p className=" text-lg ">
            What sets us apart is our commitment to local service with a
            nationwide reach. We understand the unique needs of each community,
            allowing us to provide personalized solutions that resonate with
            homeowners across the country. Our team is always nearby, ready to
            respond quickly and efficiently to your needs, no matter where you
            are.
          </p>
          <p className=" text-lg ">
            At Magnetic Services, our goal is to exceed your expectations every
            time. We continuously strive to improve our services, staying at the
            forefront of industry advancements to offer you the best possible
            outcomes. With us, you’re not just getting a service; you’re gaining
            a partner dedicated to helping you make the most of your home.
          </p>
        </div>
        <div className="mb-4">
          <Image
            src="/img/about-img2.jpg"
            title="Background Image"
            height="600"
            width="1200"
            alt="Image"
          />
        </div>
      </Container>
    </FullContainer>
  );
}
