import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
export default function Banner({title}) {
  return (
    <>
      <FullContainer className=" bg-nav  border-b border-white pb-11 ">
        <Container className="border-t border-amber-600">
          <div className=" p-4 lg:p-24 text-cernter">
            <h1 className=" text-5xl lg:text-6xl font-semibold ">{title}</h1>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
