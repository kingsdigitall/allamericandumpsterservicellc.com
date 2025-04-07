import Image from "next/image";
import Link from "next/link";
import React from "react";
import { headers } from "next/headers";
import { FaCrown } from "react-icons/fa6";
import Banner from "@/app/components/Home/Banner";
import contentData from "@/components/Content/about.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import NewContent from "@/components/Content/aboutcontent.json";
import content from "@/components/Content/subDomainUrlContent.json";
import NavbarState from "@/app/components/State/NavbarState";
import contactInfo from "@/components/Content/ContactInfo.json";
interface AboutProps {
  subdomain: string;
}

export function generateMetadata({ params }: { params: { services: string } }) {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  const serviceData: any = NewContent.find(
    (content) => content.StateID === subdomainKey?.toUpperCase(),
  );

  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return {
    title: {
      absolute: contentData.h1Banner,
    },
    description: `Learn about All American Dumpster Service LLC, a leading provider of reliable, affordable dumpster rental services across ${Data.name}. Call Now Today!`,
    alternates: {
      canonical: `https://${Data.slug}.${ContactInfo.host}/about`,
    },
  };
}

const Page = async () => {
  // Fetch subdomain or any other server-side data here
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  const serviceData: any = NewContent.find(
    (content) => content.StateID === subdomainKey?.toUpperCase(),
  );

  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return (
    <div className="">
      <NavbarState />
      <div className="max-[1200px] flex flex-col items-center justify-center bg-white text-black">
        <div className="w-screen min-w-[375px] cursor-default text-lg md:w-full">
          {/* poster */}
          <Banner
            h1={contentData.h1Banner}
            image={contentData.bannerImage}
            header={contentData.bannerQuote}
            p1={`Learn about All American Dumpster Service LLC, a leading provider of reliable, affordable dumpster rental services across ${Data.name}. Call Now Today!`}
          />
          {/* poster */}
          {/* -----------------------------------------About Start------------------------ */}
          <div className="mx-4 mt-6 print:hidden md:mx-10">
            {/* who */}
            <div className="my-20 grid w-full grid-cols-1 items-center justify-center gap-6 px-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="text-">About </div>
                <div className="text-3xl font-bold">
                  Who We Are?
                  <br />
                </div>
                <div className="mt-6"></div>
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{
                    __html: serviceData.About.split("[location]").join(
                      Data.name,
                    ),
                  }}
                ></div>
              </div>
              <div className="w-full pt-10">
                <Image
                  src={`/${contentData.h2Image}`}
                  className="rounded-lg border object-cover shadow-lg"
                  alt={contentData.h2Image.split(".")[0]}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            {/* who */}
          </div>
          {/* -----------------------------------------About End------------------------ */}
          <div className="bg-gray-100 px-6 py-12 ">
            <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-10 text-center lg:flex-row">
              <div className="lg:w-[40%]">
                <h2 className="text-3xl font-bold text-gray-800">
                  Dumbster Services for Every Need
                </h2>
                <p className="mt-4 text-gray-600">
                  Need a reliable dumpster rental service? All American Dumpster Rental Experts is your
                  solution. We provide a wide range of dumpster sizes to
                  accommodate any project, big or small. Our team is dedicated
                  to ensuring your waste disposal needs are met efficiently and
                  effectively.
                </p>
                <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
                  <button
                    id="cta-id"
                    className="mt-8 rounded-lg bg-minor px-6 py-3 text-white transition duration-700 ease-in hover:bg-main"
                  >
                    Call Now
                  </button>
                </a>
              </div>
              <div className="mt-8 flex flex-col justify-center gap-6 lg:flex-row ">
                {/* Affordable */}
                <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md ">
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20 ">
            <GiReceiveMoney className=' text-xl'/>
            </div> */}
                  <h3 className="mt-4 text-lg font-bold text-gray-800">
                    Our Mission
                  </h3>
                  <div
                    className="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: serviceData.our_mission
                        .split("[location]")
                        .join(Data.name),
                    }}
                  />
                </div>
                {/* Professional */}
                <div className="flex w-full max-w-sm flex-col items-center rounded-lg border border-main bg-white p-6 shadow-md">
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <GrUserWorker className='text-main text-xl'/>
            </div> */}
                  <h3 className="mt-4 text-lg font-bold text-gray-800">
                    Our Ethics
                  </h3>
                  <div
                    className="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: serviceData.our_vision
                        .split("[location]")
                        .join(Data.name),
                    }}
                  />
                </div>
                {/* High Quality */}
                <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md">
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20">
            <FaRegThumbsUp className=' text-xl'/>
            </div> */}
                  <h3 className="mt-4 text-lg font-bold text-gray-800">
                    Our Vision
                  </h3>
                  <div
                    className="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: serviceData.our_ethics
                        .split("[location]")
                        .join(Data.name),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* -----------------------------------------Conversation ------------------------ */}
          <div className="my-20">
            <div className="text-center text-4xl font-extrabold text-main">
              Let&apos;s Start a Conversation
            </div>
            <div className="mt-4 border-double text-center">
              <button
                id="cta-id"
                className="mt-3 rounded-lg bg-main px-4 py-3 font-bold tracking-wide text-white shadow-lg hover:bg-minor"
              >
                <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
                  {ContactInfo.No}
                </a>
              </button>
            </div>
          </div>
          {/* -----------------------------------------Conversation End------------------------ */}
          {/* all */}
          <div className="mx-4 my-20 md:mx-20">
            <div className="text-3xl font-bold">
              <div className="flex justify-center gap-2">
                <FaCrown className="text-3xl text-main" />
                Areas We Serve
              </div>
            </div>
            <div
              className="mt-2 text-center text-xl"
              dangerouslySetInnerHTML={{
                __html: contentData.areaweserveSection.description,
              }}
            ></div>
            <div className="flex justify-center">
              <Link
                href={`${ContactInfo?.baseUrl}locations`}
                className="text-center text-xl font-bold text-main duration-150 ease-in hover:tracking-wide"
              >
                {contentData.areaweserveSection.linkText}
              </Link>
            </div>
          </div>
          {/* all */}
        </div>
      </div>
    </div>
  );
};

export default Page;
