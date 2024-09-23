import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
export default function Banner({ title }) {
  return (
    // This banner is being used on all pages except home page.
    <FullContainer className="bg-nav border-b border-white pb-11 ">
      <Container className="border-t border-amber-600 py-16">
        <h1 className="text-5xl lg:text-6xl font-semibold">{title}</h1>
      </Container>
    </FullContainer>
  );
}
