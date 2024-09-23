import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FullContainer from "./FullContainer";
import Container from "./Container";

export default function Faqs() {
  return (
    <>
      {/* Accordion Section */}
      <div className="my-10 mx-auto max-w-[1200px]  ">
        <Accordion type="single" collapsible className=" lg:mx-28 p-2 py-14">
          {/* Accordion Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>What services do we provide?</AccordionTrigger>
            <AccordionContent>
              We offer a range of services including home maintenance, repairs,
              and renovation services that ensure your home is in top condition.
            </AccordionContent>
          </AccordionItem>

          {/* Accordion Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I contact customer support?
            </AccordionTrigger>
            <AccordionContent>
              You can reach our customer support team through our contact form,
              via email, or by calling our helpline at any time.
            </AccordionContent>
          </AccordionItem>

          {/* Accordion Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What is our nationwide coverage?
            </AccordionTrigger>
            <AccordionContent>
              We have a wide network of professionals offering services all
              across the country, ensuring that no matter where you live, we’ve
              got you covered.
            </AccordionContent>
          </AccordionItem>

          {/* Accordion Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What is our nationwide coverage?
            </AccordionTrigger>
            <AccordionContent>
              We have a wide network of professionals offering services all
              across the country, ensuring that no matter where you live, we’ve
              got you covered.
            </AccordionContent>
          </AccordionItem>

          {/* Accordion Item 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What is our nationwide coverage?
            </AccordionTrigger>
            <AccordionContent>
              We have a wide network of professionals offering services all
              across the country, ensuring that no matter where you live, we’ve
              got you covered.
            </AccordionContent>
          </AccordionItem>

          {/* Accordion Item 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What is our nationwide coverage?
            </AccordionTrigger>
            <AccordionContent>
              We have a wide network of professionals offering services all
              across the country, ensuring that no matter where you live, we’ve
              got you covered.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
