import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";

export default function HomeBanner({ image, data }) {
  return (
    <FullContainer
      className="min-h-[63vh] overflow-hidden p-10 text-center"
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
      <Container className="gap-8">
        <h1
          style={{ fontSize: data?.titleFontSize || 48 }}
          className="font-bold capitalize max-w-screen-md"
        >
          {data?.title}
        </h1>
        {data?.tagline && (
          <p
            style={{ fontSize: data?.taglineFontSize || 18 }}
            className="leading-tight md:leading-none"
          >
            {data?.tagline}
          </p>
        )}
      </Container>
    </FullContainer>
  );
}
