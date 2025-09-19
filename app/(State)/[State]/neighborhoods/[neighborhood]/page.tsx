import Image from "next/image";
import { notFound } from "next/navigation";
import Banner from "@/app/components/Home/Banner";
import Service from "@/app/components/Home/Service";
import Faq from "@/app/components/Home/Faq";
import HourCta from "@/app/components/Home/HourCta";
import ReviewWidget from "@/app/components/Widgets/ReviewWidget";
import AreaWeServe from "@/app/components/Widgets/AreaWeServe";
import ProcessWidget from "@/app/components/Widgets/ProcessWidget";
import NavbarState from "@/app/components/State/NavbarState";
import Link from "next/link";
import ZipAndNeighAccordian from "@/app/components/Home/ZipAndNeighAccordian";
import ContactInfo from "@/components/Content/ContactInfo.json";
import subdomainContent from "@/components/Content/subDomainUrlContent.json";
// import Service from "@/app/Components/Service";

import { headers } from "next/headers";
import TypeOfDumpster from "@/app/components/Widgets/TypeOfDumpster";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Define interface for the subdomain content structure
interface SubdomainContent {
  [key: string]: {
    name: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    bannerImage: string;
    p1Banner: string;
    h1Banner: string;
    h2: string;
    p2: string;
    h2Image: string;
    needsSection?: {
      title: string;
      description: string;
      needslist: Array<{
        title: string;
        description: string;
      }>;
    };
    processSection?: {
      title: string;
      processData: Array<{
        title: string;
        description: string;
      }>;
    };
    h5?: string;
    p5?: string;
    h5Image?: string;
    h6?: string;
    p6?: string;
    h6Image?: string;
    h4?: string;
    p4?: string;
    h3?: string;
    p3?: string;
    h7?: string;
    p7?: string;
    h7Image?: string;
    faq?: Array<{
      ques: string;
      ans: string;
    }>;
    reviews?: any[];
    neighbourhoods?: string;
    zipCodes?: string;
    address?: string;
    pricingSection?: {
      title: string;
      description: string;
      list: Array<{
        title: string;
        description: string;
      }>;
    };
    seasonSection?: {
      ttile: string; // Note: This appears to be a typo in the original data (ttile instead of title)
      list: Array<{
        title: string;
        description: string;
      }>;
    };
    topSight?: Array<{
      name: string;
      description: string;
      image: string;
    }>;
  };
}

// Function to fetch subdomain data from API
// async function getSubdomainData() {
//   const headersList = headers();
//   const proto: any = headersList.get("x-forwarded-proto") || "http";
//   const host = headersList.get("host");
//   const baseUrl = `${proto}://${host}`;
//   const res = await fetch(`${baseUrl}/api/subdomains`, { cache: "no-store" });
//   return res.json().catch(() => ({}));
// }

interface NeighborhoodPageProps {
  params: { State: string; neighborhood: string };
}
const stateName: Record<string, string> = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

export async function generateMetadata({ params }: NeighborhoodPageProps) {
  const { State, neighborhood } = params;

  // Cast the imported JSON to our defined type
  const content = subdomainContent as SubdomainContent;

  const parentCityData = content[State];

  // Format neighborhood name for display
  const neighborhoodName = neighborhood
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const staetName = State.split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Create neighborhood-specific metadata using parent city data
  const title =
    parentCityData?.metaTitle
      ?.split(content[State].name)
      .join(neighborhoodName)
      ?.split("now")
      .join(ContactInfo.No) ||
    `${ContactInfo.service} in ${neighborhoodName} - Call ${ContactInfo.No}`;

  const description =
    parentCityData?.metaDescription
      ?.split(content[State].name)
      .join(neighborhoodName)
      ?.split("now")
      .join(ContactInfo.No) ||
    `Professional ${ContactInfo.service} in ${neighborhoodName}. Fast delivery, competitive pricing, and reliable service. Call ${ContactInfo.No} for your dumpster rental needs.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://${State}.${ContactInfo.host}/neighborhoods/${neighborhood}/`,
    },
  };
}

export default async function NeighborhoodPage({
  params,
}: NeighborhoodPageProps) {
  const { State, neighborhood } = params;

  // Cast the imported JSON to our defined type
  const content = subdomainContent as SubdomainContent;

  const cityData = content;
  const abbrevations: any = State.split("-").pop();

  // Validate subdomain
  const subDomain = Object.keys(cityData);
  const validSubdomains = subDomain;
  if (!validSubdomains.includes(State)) {
    notFound();
  }

  // Get parent city data
  const parentCityData = cityData[State];
  
  // Additional validation to ensure parentCityData exists
  if (!parentCityData) {
    notFound();
  }

  // Validate neighborhood exists in the city's neighborhoods list
  if (!parentCityData?.neighbourhoods) {
    notFound();
  }

  // Ensure neighborhoods is a string before processing
  const neighborhoodsString = typeof parentCityData.neighbourhoods === 'string' ? parentCityData.neighbourhoods : '';
  
  const validNeighborhoods = neighborhoodsString
    .split("|")
    .filter((n: string) => n && n.trim()) // Filter out empty neighborhoods
    .map((n: string) =>
      n.trim().toLowerCase().replace(/\.+$/, "").replace(/\s+/g, "-"),
    );

  if (!validNeighborhoods.includes(neighborhood)) {
    notFound();
  }

  // Format neighborhood name for display
  const neighborhoodName = neighborhood
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const stateName = State.split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const ContentData = JSON.parse(
    JSON.stringify(parentCityData)
      .split("[location]")
      .join(neighborhoodName)
      .split("[phone]")
      .join(ContactInfo.No)
      .split(parentCityData?.name || State)
      .join(neighborhoodName),
  );

  // Update specific fields for neighborhood
  ContentData.name = neighborhoodName;
  ContentData.slug = neighborhood;

  const slugs: any = Object.keys(cityData)
    .filter((key) => key !== State)
    .map((key) => cityData[key]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${ContactInfo.name}`,
        image: `${ContactInfo.logoImage}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${stateName[abbrevations.toUpperCase()]} ${ContactInfo.service}`,
          addressLocality: `${ContentData?.name}, ${abbrevations.toUpperCase()}`,
          addressRegion: stateName[abbrevations.toUpperCase()],
          postalCode: "",
          addressCountry: "US",
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4.9",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: `${stateName[abbrevations.toUpperCase()]} ${ContactInfo.service}`,
          },
        },
        telephone: ContactInfo.No,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "20:00",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: `${ContactInfo.service} in ${ContentData?.name}, ${abbrevations.toUpperCase()}`,
        brand: {
          "@type": "Brand",
          name: `${ContactInfo.service} ${ContentData?.name}, ${abbrevations.toUpperCase()} Pros`,
        },
        description: `${ContentData?.metaDescription
          ?.split("[location]")
          .join(ContentData?.name || ContactInfo.location)
          ?.split("[phone]")
          .join(ContactInfo.No)}`,
        url: `https://${State}.${ContactInfo.host}/neighborhoods/${neighborhood}`,
        aggregateRating: {
          "@type": "AggregateRating",
          reviewCount: 7,
          ratingValue: 4.802,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity:
          ContentData.faq?.map((faq: any) => ({
            "@type": "Question",
            name: faq?.ques?.split("[location]").join(neighborhoodName),
            acceptedAnswer: {
              "@type": "Answer",
              text: faq?.ans?.split("[location]").join(neighborhoodName),
            },
          })) || [],
      },
    ],
  };

  return (
    <div className="">
      <NavbarState />
      <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* ... */}
      </section>
      <div className="mx-auto max-w-[2100px] overflow-hidden">
        <Banner
          h1={`${ContentData.h1Banner
            ?.split("[location]")
            .join(ContentData?.name || ContactInfo.location)
            ?.split("[phone]")
            .join(ContactInfo.No)}`}
          image={ContentData.bannerImage}
          header={ContentData.bannerQuote}
          p1={`${ContentData?.metaDescription
            ?.split("[location]")
            .join(ContentData?.name || ContactInfo.location)
            ?.split("now")
            .join(ContactInfo.No)}.`}
        />
        {/* Section 1 */}
        <div className="mt-14 grid w-full grid-cols-1 items-center  gap-6 px-6 md:mt-28 md:grid-cols-2 md:px-24">
          <div className=" h-full">
            <Image
              height={1000}
              width={1000}
              src={`${ContentData?.h2Image}`}
              className="h-full w-full  rounded-lg object-cover shadow-lg"
              alt={
                ContentData?.h2Image.split("/").pop()?.split(".")[0] || "image"
              }
            />
          </div>
          <div className=" flex w-full flex-col gap-3 ">
            <span className="text-sm font-bold text-main">
              {ContentData?.name} {ContactInfo.name} Services
            </span>
            <h2 className="text-3xl font-bold">{ContentData?.h2}</h2>

            <div
              className="mt-3  text-justify"
              dangerouslySetInnerHTML={{ __html: ContentData?.p2 }}
            ></div>
            <div className="gap-4 md:flex">
              <div className="rounded-lg bg-gray-100 p-4 shadow-lg">
                <h4 className="text-xl font-bold">
                  Residential {ContactInfo.name} Services
                </h4>
                <p>
                  Professional Residential {ContactInfo.service} in{" "}
                  {ContentData?.name}, {parentCityData?.name || State},{" "}
                  {State.split("-").pop()?.toUpperCase()}.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 shadow-lg">
                <h4 className="text-xl font-bold">
                  Commercial {ContactInfo.name} Services
                </h4>
                <p>
                  Commercial {ContactInfo.service} in {ContentData?.name},{" "}
                  {parentCityData?.name || State},{" "}
                  {State.split("-").pop()?.toUpperCase()}.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Section 1 */}
        {/* Section 2 */}
        {ContentData.h3 && (
          <div className="mt-14 flex flex-col items-center justify-center bg-main p-6 px-6 text-center text-white md:mt-28 md:px-24">
            <h2 className="text-2xl font-bold ">{ContentData?.h3}</h2>
            <p
              className="mt-4 text-lg"
              dangerouslySetInnerHTML={{ __html: ContentData?.p3 }}
            ></p>
          </div>
        )}
        {/* Section 2 */}
        {/* Service */}
        <div className="mt-14 md:mt-20">
          <Service value={State} />
          <TypeOfDumpster />
        </div>
        {/* Service */}
        {/* Needs */}
        {ContentData?.needsSection ? (
          <div className="mt-14 w-full px-6 md:mt-28 md:px-24">
            <h2 className="text-first text-center text-3xl font-extrabold">
              {ContentData?.needsSection.title}
            </h2>
            <p
              className="mt-4 text-center text-lg"
              dangerouslySetInnerHTML={{
                __html: ContentData?.needsSection.description,
              }}
            ></p>
            <div className="event mt-6 grid grid-cols-1 gap-5 text-center sm:grid-cols-2 md:gap-16 md:px-20 lg:grid-cols-3">
              {ContentData?.needsSection.needslist.map(
                (item: any, index: any) => {
                  return (
                    <div
                      className=" 1 rounded-md border p-4 shadow-md "
                      key={index}
                    >
                      <div className="1 text-center text-xl font-bold text-minor">
                        {item.title}
                      </div>
                      <div className="mt-4 text-lg">{item.description}</div>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        ) : null}
        {/* Needs  */}
        {/* Section 4 */}
        {ContentData.h5 && (
          <div className="mt-14 grid grid-cols-1  gap-10 px-6 md:mt-28 md:grid-cols-2 md:px-24 ">
            <div className="flex flex-col justify-center    ">
              <h2 className="text-first text-3xl font-bold">
                {ContentData.h5}
              </h2>
              <div
                className="mt-4  list-disc text-justify"
                dangerouslySetInnerHTML={{ __html: ContentData.p5 }}
              ></div>
            </div>
            <div className="">
              <Image
                height={10000}
                width={10000}
                src={`${ContentData.h5Image}`}
                className=" h-[16rem] w-full rounded-lg object-cover shadow-lg"
                alt={
                  ContentData.h5Image.split("/").pop()?.split(".")[0] || "image"
                }
                title={
                  ContentData.h5Image.split("/").pop()?.split(".")[0] || "image"
                }
              />
            </div>
          </div>
        )}
        {/* Section 4 */}
        {/* Section 5 */}
        {ContentData.h6 && (
          <div className="mt-14 grid grid-cols-1  gap-10 px-6 md:mt-28 md:grid-cols-2 md:px-24">
            <div className="">
              <Image
                height={10000}
                width={10000}
                src={`${ContentData?.h6Image}`}
                className=" h-[17rem] w-full rounded-lg object-cover  shadow-lg"
                alt={
                  ContentData?.h6Image.split("/").pop()?.split(".")[0] ||
                  "image"
                }
                title={`${ContentData.h6Image.split("/").pop()?.split(".")[0] || "image"} ,${ContentData.name}`}
              />
            </div>
            <div className="flex flex-col justify-center    ">
              <h2 className="text-first text-3xl font-bold">
                {ContentData.h6}
              </h2>
              <div
                className="mt-4  text-justify"
                dangerouslySetInnerHTML={{ __html: ContentData.p6 }}
              ></div>
            </div>
          </div>
        )}
        {/* Section 5 */}
        {/* Section 3 */}
        {ContentData.h4 && (
          <div className="mt-14 flex flex-col items-center justify-center bg-main p-6 px-6 text-center text-white md:mt-28 md:px-24">
            <h2 className="text-2xl font-bold ">{ContentData?.h4}</h2>
            <p
              className="mt-4 text-lg"
              dangerouslySetInnerHTML={{ __html: ContentData?.p4 }}
            ></p>
          </div>
        )}
        {/* Section 3 */}
        {/* Pricing Section */}
        {ContentData?.pricingSection ? (
          <div className="mt-14 px-6 md:mt-28 md:px-24">
            <h2 className=" text-3xl font-bold">
              {ContentData?.pricingSection.title}
            </h2>
            <div
              className="mt-4 text-lg"
              dangerouslySetInnerHTML={{
                __html: ContentData?.pricingSection.description,
              }}
            ></div>
            <div className="mt-10 grid grid-cols-1  gap-6 md:grid-cols-2">
              {ContentData?.pricingSection.list.map((item: any, index: any) => {
                return (
                  <div
                    className=" 1 rounded-md border p-4 shadow-md"
                    key={index}
                  >
                    <div className="1 text-center text-lg font-bold ">
                      {item.title}
                    </div>
                    <div
                      className="my-4"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {/* Pricing Section */}
        {/* Season Section */}
        {ContentData?.seasonSection ? (
          <div className="mt-14 px-6 md:mt-28 md:px-24">
            <h2 className=" text-center text-3xl font-bold">
              {ContentData.seasonSection.ttile}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
              {ContentData?.seasonSection.list.map((item: any, index: any) => {
                return (
                  <div
                    className="rounded-xl border px-10 py-4 shadow-lg"
                    key={index}
                  >
                    <div className="text-2xl font-semibold">{item.title}</div>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {/* Season Section */}
        <ProcessWidget />
        {/* Cta */}
        <div className="mt-14 md:mt-28">
          <HourCta />
        </div>
        {/* Cta */}
        {/* History */}
        {ContentData.h7 && (
          <div className="mt-14 grid w-full grid-cols-1 gap-10  px-6 md:mt-28 md:grid-cols-2 md:px-24">
            <div className=" flex w-full flex-col justify-around gap-3   ">
              <div className="">
                <h2 className="text-3xl font-bold">{ContentData?.h7}</h2>
                <p
                  className="mt-10  text-justify"
                  dangerouslySetInnerHTML={{ __html: ContentData?.p7 }}
                ></p>
              </div>
            </div>
            <div className="">
              <Image
                src={`${ContentData?.h7Image}`}
                className="h-[100%] w-full rounded-lg border object-cover shadow-lg "
                alt={
                  ContentData?.h7Image.split("/").pop()?.split(".")[0] ||
                  "image"
                }
                width={1000}
                height={500}
              />
            </div>
          </div>
        )}
        {/* History */}
        {/* Top Sight */}
        {ContentData?.topSight ? (
          <div className="mt-14 md:mt-28">
            <h2 className={`  text-center text-3xl font-bold`}>Top Sights</h2>
            <div className="mt-10 grid gap-6 px-6 text-center sm:grid-cols-2 md:px-40 lg:grid-cols-3">
              {ContentData?.topSight.map((item: any) => (
                <div className="rounded-xl p-4 shadow-lg" key={item}>
                  <div className="">
                    {/* <Image
                      src={`/${item?.image}`}
                      alt={item?.name}
                      width={900}
                      height={950}
                      className="h-60 w-full object-cover "
                    /> */}
                  </div>
                  <div className="">
                    <div className={` text-center font-bold`}>
                      <br />
                      {item?.name}
                    </div>
                    <div className=""> {item?.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {/* Top Sight */}
        {/* Area we Serve */}
        {slugs.length > 0 && (
          <div id="area-we-serve" className="pt-14 md:pt-28">
            <h2 className={`  text-center text-3xl font-bold text-main`}>
              Cities We Serve{" "}
            </h2>
            <AreaWeServe slugs={slugs} />
          </div>
        )}
        {/* Neighborhood */}
        {/* FAQ */}
        {ContentData?.faq ? <Faq neighborhood={`${neighborhood}`} /> : null}

        {/* FAQ */}
        {/* Reviews */}
        <ReviewWidget value={State} neighborhood={neighborhood} />
        {/* Reviews */}
        {/* -----------------------------------------Map End---------------------------- */}
        <div className="block w-full">
          <div className="mt-14 overflow-hidden rounded-xl border md:mt-20">
            <iframe
              title="Google Map"
              height="350"
              width={"100%"}
              src={`https://maps.google.com/maps?q=${neighborhood}+${State}+USA&t=&z=8&ie=UTF8&iwloc=&output=embed`}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* -----------------------------------------Map End---------------------------- */}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Fetch content from local JSON file
  const content = subdomainContent;

  const cityData: any = content;
  const neighborhoods: any[] = [];

  // Extract neighborhoods only from cities that have valid slugs and neighborhoods
  Object.values(cityData).forEach((city: any) => {
    if (city.slug && city.neighbourhoods) {
      // Ensure neighborhoods is a string before splitting
      const neighborhoodList = typeof city.neighbourhoods === 'string' ? city.neighbourhoods : '';
      
      const cityNeighborhoods = neighborhoodList
        .split("|")
        .filter((neighName: string) => neighName && neighName.trim()) // Filter out empty neighborhoods
        .map((neighName: string) => {
          const formattedNeighborhood = neighName
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/\.+$/, "");
          
          // Prevent problematic neighborhood names that could cause routing issues
          if (formattedNeighborhood.includes(city.slug)) {
            // Skip neighborhoods that contain the city slug to prevent conflicts
            return null;
          }
          
          // Additional validation to prevent malformed State parameters
          const stateSlug = city.slug;
          if (!stateSlug || typeof stateSlug !== 'string') {
            return null;
          }
          
          return {
            State: stateSlug,
            neighborhood: formattedNeighborhood,
          };
        })
        .filter(Boolean); // Remove null values
        
      neighborhoods.push(...cityNeighborhoods);
    }
  });

  return neighborhoods;
}
