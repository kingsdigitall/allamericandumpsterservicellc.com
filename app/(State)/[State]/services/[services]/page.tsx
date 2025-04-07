import Banner from "@/app/components/Home/Banner";
import NavbarState from "@/app/components/State/NavbarState";
import React from "react";
import Servicedata from "@/components/Content/serviceWidgetContent.json";
import Image from "next/image";
import Service from "@/app/components/Home/Service";
import { headers } from "next/headers";
import content from "@/components/Content/subDomainUrlContent.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import TypeOfDumpster from "@/app/components/Widgets/TypeOfDumpster";
import HourCta from "@/app/components/Home/HourCta";

export function generateMetadata({ params }: { params: { services: string } }) {
  const serviceData: any = Servicedata.lists.find(
    (service) => service.slug === params.services,
  );
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") 
  const Data: any = content[subdomain as keyof typeof content];
  return {
    title: serviceData.title.split("[location]").join(Data.name),
    description: serviceData.description.split("[location]").join(Data.name),
    alternates: {
      canonical: `https://${Data.slug}.${ContactInfo.host}/services/${params.services}`,
    },
  };
}

const page = ({ params }: { params: { services: string } }) => {
  const serviceData: any = Servicedata.lists.find(
    (service) => service.slug === params.services,
  );
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") 
  const Data: any = content[subdomain as keyof typeof content];
  return (
    <div>
      <NavbarState />
      <div className="">
        <Banner
          h1={serviceData.title.split("[location]").join(Data.name)}
          image={"banner.jpg"}
          p1={
            serviceData.description.split("[location]").join(Data.name)
          }
        />
        <div className="mx-4 mt-6 print:hidden md:mx-10">
          {/* who */}
          <div className="my-20 grid w-full grid-cols-1 items-center justify-center gap-6 px-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold">
                {serviceData.h2.split("[location]").join(Data?.name||"USA")}
                <br />
              </h2>
              <div className="mt-6"></div>
              <div
                className="text-justify"
                dangerouslySetInnerHTML={{
                __html: serviceData.para1.split("[location]").join(Data.name),
                }}
              >
              </div>
            </div>
            <div className="w-full pt-10">
              <Image
                src={`/dumpster-near-construction-site-home.jpeg`}
                className="rounded-lg border object-cover shadow-lg"
                alt=""
        
                width={1000}
                height={1000}
              />
            </div>
          </div>
          {/* who */}
        </div>
        {/* <div className="mx-auto my-4 w-80 border p-4">
          <div dangerouslySetInnerHTML={{ __html: serviceData.description }} />
        </div> */}
        <Service value={subdomain} />
        <TypeOfDumpster/>
        <HourCta />
      </div>
    </div>
  );
};

export default page;
