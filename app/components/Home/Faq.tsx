"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import data from "@/components/Content/faq.json";
import content from "@/components/Content/subDomainUrlContent.json";
import ContactInfo from "@/components/Content/ContactInfo.json";

// Define type for content items
interface ContentItem {
  name?: string;
  [key: string]: any;
}

const Faq = ({ value = "", neighborhood = "" }: { value?: string; neighborhood?: string }) => {
  const [shuffledFaq, setshuffledFaq] = useState(data);

  useEffect(() => {
    // Shuffle testimonials on the client side after the component mounts
    setshuffledFaq([...data].sort(() => 0.5 - Math.random()));
  }, []);

  // Determine location name based on props
  let locationName = "USA";
  
  if (neighborhood) {
    // If neighborhood is provided, use it as the location name
    // Format the neighborhood name (convert hyphens to spaces and capitalize words)
    locationName = neighborhood
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } else if (value) {
    // If only value (state) is provided, use state name
    const contentData = content[value as keyof typeof content] as ContentItem | undefined;
    const abbrevation = value?.split("-").pop()?.toUpperCase();
    locationName = contentData?.name
      ? abbrevation
        ? `${contentData.name}`
        : contentData.name
      : "USA";
  }

  return (
    <div className="mt-14 md:mt-20">
      <h2 className=" text-center text-3xl font-bold text-main">
        FAQs about dumpster rental in {locationName}
      </h2>
      <div className="mt-5 flex flex-col items-center justify-center px-6">
        <Accordion
          type="multiple"
          defaultValue={["item-0"]}
          className="md:w-2/3 "
        >
          {shuffledFaq.slice(0, 5).map((items: any, index: number) => (
            <AccordionItem
              value={`item-${index + 1}`}
              className="no-underline"
              key={index}
            >
              <AccordionTrigger className="font-semibold hover:no-underline">
                Q: {items?.FAQ.split("[location]").join(locationName)}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                A: {items?.Answer.split("[location]").join(locationName)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;