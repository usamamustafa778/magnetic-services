import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";

export default function HomeBanner({ image, data }) {
  const list = [
    "Comprehensive Home Maintenance Solutions",
    "Expert Professionals for your home",
    "From Repairs to Renovations",
    "Fast, Reliable Service You Can Trust",
    "Serving Your Community with Pride",
  ];

  return (
    <FullContainer
      className="py-40 overflow-hidden px-10"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${data?.opacity / 100})`,
        color: data?.textColor || "white",
      }}
    >
      <Image
        src={image}
        title={data?.imageTitle || data?.title || "Banner"}
        alt={data?.altImage || data?.tagline || "No Banner Found"}
        priority={true}
        fill={true}
        loading="eager"
        className="-z-10 w-full h-full object-cover absolute top-0"
        objectFit="cover"
        sizes="(max-width: 320px) 320px,
               (max-width: 480px) 480px,
               (max-width: 768px) 768px,
               (max-width: 1024px) 1024px,
               (max-width: 1280px) 1280px,
               (max-width: 1600px) 1600px,
               (max-width: 1920px) 1920px,
               (max-width: 2560px) 2560px,
               (max-width: 3840px) 3840px,
               100vw"
      />
      <Container>
        <div className="w-full">
          <h1
            style={{ fontSize: data?.titleFontSize || 48 }}
            className="font-bold capitalize max-w-screen-md"
          >
            {data?.title}
          </h1>
          <div className="h-1 w-32 bg-nav"></div>

          <ul className="ml-5 mt-9">
            {list?.map((item, index) => (
              <li key={index} className="list list-disc text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </FullContainer>
  );
}
