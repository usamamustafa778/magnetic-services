import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";

export default function Categories({ categories, imagePath }) {
  return (
    <FullContainer>
      <Container className="py-14">
        <h2 className="text-4xl font-bold text-center mb-5">
          Your Trusted Service Partner
        </h2>
        <div className="w-full grid grid-cols-5 gap-5">
          {categories?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl px-5 py-3 flex flex-col items-center justify-center text-center rounded-lg"
            >
              <Image
                src={`${imagePath}/${item.image}`}
                title={item.title || "Background Image"}
                height={50}
                width={50}
                alt={item.title || "Image"}
                className="w-14 h-14 mt-3"
              />
              <h3 className="font-medium text-lg mt-4 capitalize">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
