import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

// JSON data representing the sections
const servicesData = [
  {
    heading: "Home is Where We Excel",
    text: "We understand that your home is your sanctuary, and that’s why we’re committed to providing top-tier services that enhance and protect it. From essential repairs to comprehensive renovations, our team excels in every aspect of home improvement. With a deep understanding of what makes a house a home, we approach each project with the care and precision it deserves. Our skilled professionals bring a wealth of experience and expertise, ensuring that every job, no matter the size, is completed to the highest standards. Whether you’re looking to refresh your space or address critical maintenance issues, you can trust us to deliver results that not only meet but exceed your expectations.",
    image: "/img/home/house.jpg",
  },
  {
    heading: "Reliable, Local Expertise",
    text: "Our mission is to provide exceptional home services that you can rely on. We believe in delivering more than just a service—we deliver peace of mind. Our team of skilled professionals is committed to exceeding your expectations by focusing on quality workmanship, clear communication, and personalized solutions tailored to your unique needs. We continuously strive for excellence, staying ahead of industry trends to offer you the most effective and efficient services available. Whether it’s a small repair or a major project, you can count on us to treat your home with the utmost care and respect, ensuring your complete satisfaction every step of the way.",
    image: "/img/home/female-client-shaking-hand.jpg",
  },
  {
    heading: "Live Comfortably. Locally Served.",
    text: "We pride ourselves on being the go-to home services provider in your community. Our approach is simple: we are right where you need us, whenever you need us. By focusing on local services, we ensure that our expert professionals are always geographically accessible and ready to cater to your specific needs. Whether it’s a minor repair or a major renovation, our team is just around the corner, bringing convenience and peace of mind to homeowners. With our comprehensive service offerings, you can trust that we’ll handle everything with the expertise and care that only a local provider can offer.",
    image: "/img/home/community.jpg",
  },
];

export default function Services() {
  return (
    <FullContainer className="bg-gray-100 py-20">
      <Container className="gap-14">
        {servicesData.map((service, index) => (
          <div
            className={`flex gap-16 ${
              index % 2 === 1 ? "flex-row-reverse" : "flex-row"
            }`}
            key={index}
          >
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-5xl font-bold">
                {service.heading}
              </h2>
              <p className="text-gray-600 mt-3">{service.text}</p>
            </div>

            <Image
              src={service.image}
              title="Background Image"
              height={600}
              width={600}
              className="flex-1 h-[400px] rounded-lg object-cover"
              alt="Service Image"
            />
          </div>
        ))}
      </Container>
    </FullContainer>
  );
}
