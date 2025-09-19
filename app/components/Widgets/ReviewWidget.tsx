"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Testimonials from "@/components/Content/Reviews.json";
import content from "@/components/Content/subDomainUrlContent.json";
import ContactInfo from "@/components/Content/ContactInfo.json";

interface Review {
  id: number;
  name: string;
  content: string;
}

// Define type for content items
interface ContentItem {
  name?: string;
  [key: string]: any;
}

interface ReviewWidgetProps {
  value?: string;
  neighborhood?: string;
}

const ReviewWidget: React.FC<ReviewWidgetProps> = ({ value = "", neighborhood = "" }) => {
  const [shuffledTestimonials, setShuffledTestimonials] = useState(Testimonials);

  useEffect(() => {
    // Shuffle testimonials on the client side after the component mounts
    setShuffledTestimonials([...Testimonials].sort(() => 0.5 - Math.random()));
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
        ? `${contentData.name}, ${abbrevation}`
        : contentData.name
      : "USA";
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative pb-10">
      <h2 className="text-first mb-10 mt-20 text-center text-3xl font-bold text-main">
        Testimonials
      </h2>
      <Slider {...settings}>
        {shuffledTestimonials.slice(0, 6).map((item: any, index: number) => (
          <div
            className="relative mb-10 p-5 lg:h-80 lg:bg-main lg:text-white"
            key={index} // Use a unique identifier for the key
          >
            <div className="flex items-center justify-center">
              <Image
                src="/5Star.png"
                alt="review"
                width={1000}
                height={500}
                className="w-40"
              />
            </div>
            <div className="mt-4">
              {item.Review.split("[location]").join(locationName)}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewWidget;