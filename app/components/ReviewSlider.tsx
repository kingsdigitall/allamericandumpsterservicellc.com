"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  content: string;
}

interface ReviewSliderProps {
  data: Review[];
}
const ReviewSlider: React.FC<ReviewSliderProps> = ({data}:any) => {
// console.log(data)

  const testimonials = [
    {
      "name": "Jessica Lee",
      "content":
        "The entire process was seamless. From booking to pickup, everything was handled professionally. The team helped me choose the perfect size for my home renovation, and I couldn’t be happier with the service!"
    },
    {
      "name": "Michael Turner",
      "content":
       "I’ve rented dumpsters from several companies before, but this experience was by far the best. They were punctual, courteous, and the pricing was very reasonable. Highly recommended!"
    },
    {
      "name": "Linda Martinez",
      "content":
        "I was worried about handling all the junk from our office remodel, but these guys made it easy. The dumpster was delivered on time, and the pickup was hassle-free. Great service all around!"
    },
    {
      "name": "Daniel Brooks",
      "content":
        "I needed a dumpster on short notice, and they delivered! Very professional and efficient, and the customer service team was incredibly helpful. I’ll definitely use their services again for future projects."
    },
    {
      "name": "Emily Nguyen",
      "content":
        "Excellent service from start to finish! They explained everything clearly and provided helpful advice on the right size. The team was friendly and reliable – made our cleanup project so much easier!"
    },
    {
      "name": "Tommy Fisher",
      "content":
        "Best dumpster rental experience I’ve had! They were flexible with scheduling, and there were no surprise fees. The whole process was smooth, and they really know their stuff. I’ll be recommending them to friends and family!"
    }
  ]
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow:true,
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
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="pb-10  relative">
      <h2 className="text-first text-3xl font-bold text-center text-main mt-20 mb-10">Testimonials</h2>
    <Slider {...settings} >
      {
        testimonials.map((item:any ,index:number) => (
          
          <div className="p-5 lg:h-80 mb-10  lg:bg-main lg:text-white relative" key={index+1}>
            <div className="flex justify-center items-center"><Image src="/5Star.png" alt="review" width={1000} height={500} className="w-40 "/></div>
            
            <h3 className="text-xl font-semibold mt-4  text-center">{item.name}</h3>
            <p className="mt-4 ">{item.content}</p>
          </div>
        ))
      }
      
    </Slider>
    </div>
  );
}

export default ReviewSlider;

