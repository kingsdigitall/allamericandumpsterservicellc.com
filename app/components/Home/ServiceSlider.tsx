"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import data from "@/components/Content/serviceWidgetContent.json";



const ServiceSlider = () => {
  const testimonials = data
 
  const settings = {
      className: "center",
      centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow:true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  return (
    <div className="py-5 px-4  relative">
      
    {/* <Slider {...settings} >
      {
        testimonials.map((item:any ,index:number) => (
          
          <div className="p-3 h-96 lg:h-80 mb-10  relative " key={index+1}>
            <div className="border border-main flex flex-col justify-center items-center h-full p-2 rounded-sm shadow-xl py-4">
            <h3 className="text-2xl font-bold text-main  w-full">{item.title}</h3>
            <p className="mt-4 ">{item.description}</p>
            </div>
            
            
          </div>
        ))
      }
      
    </Slider> */}
    </div>
  );
}

export default ServiceSlider;

