import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import ContactInfo from "@/components/Content/ContactInfo.json";

const Banner = ({
  image ,
  header = "",
  p1 ,
  h1 ,
}: {
  image?: string;
  header?: string;
  p1?: string;
  h1?: string;
}) => {
  return (
    <div className=" relative  h-[60vh] max-w-[2100px] duration-150 ease-in-out md:mt-0 md:h-[500px] ">
      <Image
        className="absolute h-[60vh] w-[100%] object-cover  md:h-[500px] "
        src={`/${image}`}
        alt="Banner_Image"
        width={900}
        height={900}
      />
      <div className=" md:top-30  relative  flex h-full items-center gap-2 bg-gradient-to-r  from-[#000000f3] to-[#00000050] text-2xl text-white md:px-12   md:text-3xl md:text-[40px] ">
        <div className=" px-4  font-bold text-white md:mt-14 md:px-0 md:pt-20 md:leading-[50px] lg:ml-10 lg:w-1/2 lg:pt-0 ">
          {" "}
          <div className="">
            {/* {header && header} {" "} */}
            <h1 className={`inline md:text-5xl text-white`}>{h1}</h1>
          </div>
          <div className="mt-3 text-sm font-normal md:mt-6 md:text-lg">
            {p1 && `${p1} `}
          </div>
          <div className="flex flex-col items-center  md:flex-row md:gap-10 ">
            <a href={`tel:${ContactInfo.tel}`}>
              <button
                id="cta-id"
                aria-label="Call"
                className={` mt-4 flex items-center  bg-main  p-3 px-4 text-xl  font-semibold text-white hover:bg-minor md:mt-10`}
              >
                <FaPhoneVolume className="mr-2 text-3xl" />
                {ContactInfo.No}
              </button>
            </a>
            <Link href="https://vrdumpsters.com/about">
              <button
                aria-label="About"
                className={` mt-4 flex items-center  bg-main  p-3 px-4 text-xl  font-semibold text-white hover:bg-minor md:mt-10`}
              >
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
