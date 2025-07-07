import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCrown } from "react-icons/fa6";
import Banner from "@/app/components/Home/Banner";
import contentData from "@/components/Content/about.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import Affordable from "../components/Widgets/Affordable";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: {
    absolute: contentData.metaTitle,
  },
  description: contentData.metaDescription,
  alternates: {
    canonical: contentData.metaCanonical,
  },
};
const page = () => {
  const text = `text-[#f76610]`;
  const btn = `bg-[#f76610] hover:bg-[#191e34]`;
  return (
    <div className="">
    <Navbar/>
    <div className="max-[1200px] flex flex-col items-center justify-center  bg-white text-black ">
      <div className="  w-screen min-w-[375px] cursor-default  text-lg md:w-full">
        {/* poster */}
        <Banner
          h1={contentData.h1Banner}
          image={contentData.bannerImage}
          header={contentData.bannerQuote}
          p1={contentData.metaDescription}
        />
        {/* poster */}
        {/* -----------------------------------------About Start------------------------ */}
        <div className="mx-4 mt-6 print:hidden md:mx-10">
          {/* who */}
          <div className="my-20 grid  w-full grid-cols-1 items-center justify-center gap-6 px-8 md:grid-cols-2">
            <div className="flex flex-col justify-center    ">
              <div className="text-">ABOUT </div>
              <div className="text-3xl font-bold ">
                {" "}
                Who We Are?<br></br>
              </div>
              <div className="mt-6 "></div>
              <div
                className="  text-justify"
                dangerouslySetInnerHTML={{ __html: contentData.p2 }}
              ></div>
            </div>
            <div className="w-full pt-10">
              <Image
                src={`${contentData.h2Image}`}
                className="rounded-lg border object-cover  shadow-lg "
                alt={contentData.h2Image.split(".")[0]}
                width={1000}
                height={1000}
              />
            </div>
          </div>
          {/* who */}
          {/* Commitment */}
          {/* <div className="md:mx-10 mx-4 mt-6 flex md:flex-row flex-col gap-8 ">
            
            <div className="bg-[#191e34] text-white md:w-[40%] h-full rounded-lg font-extrabold text-3xl text-center p-6 space-y-2 "> <div className="">Call Now to get</div> <div className="">Best Dryer</div> <div className="text-">Vent Cleaning Price</div> <div className="flex justify-between items-center"><BsBookmarkStarFill className="text-3xl"/>
            <button className=" rounded-lg  hover:translate-y-2  bg-transparent  text-white font-bold">
              <a href="tel:8884398896"> (888) 271-6884</a>
            </button>
            <BsBookmarkStarFill className="text-3xl"/></div>
            </div>
            
            <div className="border-2 mt-2  rounded-lg border-[#191e34] w-full">
              <h2 className="text-2xl font-bold p-2 text-center">Our Expertise</h2>
              <div className=" p-4 text-justify">With over 15 years in the field, we boast a wealth of experience, having improved thousands of dryer systems. Our certified technicians employ the latest cleaning technology, offering personalized, effective solutions to meet the diverse needs of our customers, ensuring safety and efficiency.</div>

            </div>
          </div> */}
          {/* Commitment */}
        </div>
        {/* -----------------------------------------About End------------------------ */}
        <Affordable />
        {/* Mission */}
        {/* <div className="relative mx-4 mt-6 flex h-full flex-col gap-8 md:mx-10 md:flex-row  md:px-32">
          <div className="grid  w-full grid-cols-1 gap-8 rounded-lg p-4 md:grid-cols-3 ">
            <div className="rounded-lg border-[3px]  border-main duration-300 ease-in-out  hover:bg-main hover:text-white ">
              <h2 className="p-2 text-center text-2xl font-bold">
                {contentData.missionSection[0].title}
              </h2>
              <div
                className=" p-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: contentData.missionSection[0].description,
                }}
              ></div>
            </div>

            <div className="rounded-lg border-[3px]  border-main bg-main  text-white duration-300 ease-in-out  hover:bg-transparent hover:text-black ">
              <h2 className="p-2 text-center text-2xl font-bold">
                {contentData.missionSection[1].title}
              </h2>
              <div
                className=" p-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: contentData.missionSection[1].description,
                }}
              ></div>
            </div>

            <div className="rounded-lg border-[3px] border-main duration-300 ease-in-out  hover:bg-main hover:text-white ">
              <h2 className="p-2 text-center text-2xl font-bold">
                {contentData.missionSection[2].title}
              </h2>
              <div
                className=" p-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: contentData.missionSection[2].description,
                }}
              ></div>
            </div>
          </div>
        </div> */}
        {/* Mission */}
        {/* -----------------------------------------Conversation ------------------------ */}
        <div className="my-20">
          <div className={`text-center text-4xl font-extrabold text-main`}>
            Let&apos;s Start a Conversation
          </div>
          <div className="mt-4 border-double text-center">
            <button id='cta-id'
              className={`mt-3 rounded-lg bg-main px-4 py-3 font-bold tracking-wide text-white     shadow-lg hover:bg-minor`}
            >
              <a id='cta-id' href={`tel:${ContactInfo.tel}`}> {ContactInfo.No}</a>
            </button>
          </div>
        </div>
        {/* -----------------------------------------Conversation End------------------------ */}
        {/* all */}
        <div className="mx-4 my-20 md:mx-20">
          <div className="text-3xl font-bold ">
            <div className="flex justify-center gap-2 ">
              <FaCrown className={`text-3xl text-main `} />
              Areas We Serve
            </div>
          </div>
          <div
            className=" mt-2 text-center text-xl"
            dangerouslySetInnerHTML={{
              __html: contentData.areaweserveSection.description,
            }}
          ></div>
          <div className="flex justify-center">
            <Link
              href={`${ContactInfo?.baseUrl}locations`}
              className=" text-center text-xl font-bold text-main duration-150 ease-in hover:tracking-wide "
            >
              {contentData.areaweserveSection.linkText}
            </Link>
          </div>
        </div>
        {/* all */}
        {/* -----------------------------------------Our Mission Start------------------------ */}
        {/* <div className="flex-col md:flex md:flex-row border  md:mx-8 mx-4 py-4 rounded-lg gap-6 mt-10 mb-10 md:px-8 px-4">
          <div className="md:w-1/4">
            <img
              src="/our-mission-ideas.jpeg"
              className="border rounded-lg shadow-lg "
              alt="Star Dryer Vent Cleaning"
            />
          </div>
          <div className="mt-2 md:mt-0 flex flex-col justify-center  w-full gap-3 ">
            <div className="text-2xl font-bold">Our Mission</div>
            <div className="md:mt-3 mt-2 text-base">
              Our mission is to provide top-tier dryer vent cleaning services focused on safety, efficiency, and customer satisfaction. We strive for excellence in every service, using eco-friendly methods to enhance your home or business while ensuring a smooth and professional experience.
            </div>
          </div>
        </div> */}
        {/* -----------------------------------------Our Mission End------------------------ */}
      </div>
    </div>
    </div>
  );
};

export default page;
