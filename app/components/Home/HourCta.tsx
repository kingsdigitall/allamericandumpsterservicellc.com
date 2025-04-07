'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import ContactInfo from "@/components/Content/ContactInfo.json";
import data from "@/components/Content/hourCtaWidget.json";
import { Fade } from "react-awesome-reveal";

const HourCta = () => {
  return (
    <div>
      <div className=" flex w-full  flex-col  items-center py-5  bg-main">
        <div className=" w-full overflow-hidden   px-4 md:px-20 ">
          <div className="flex flex-col  justify-center items-center gap-10 text-white ">
            <div
              className="w-full pt-4 text-center text-xl leading-snug md:pt-0  md:text-[38px]"
              dangerouslySetInnerHTML={{ __html: data.title }}
            ></div>
            <a
            id='cta-id'
              href={`tel:${ContactInfo.tel}`}
              className="flex    w-full justify-center px-0 md:text-4xl"
            >
              <div id='cta-id' className="flex w-full items-center justify-center gap-6 ">
                <FaPhoneSquareAlt className="text-7xl" />

                <div className="jsutify-center flex flex-col items-center  ">
                  <div id='cta-id' className="jsutify-center flex items-center text-left text-xl">
                    CALL TODAY
                  </div>
                  <div id='cta-id' className="mt-1 md:text-4xl ">{ContactInfo.No} </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourCta;
