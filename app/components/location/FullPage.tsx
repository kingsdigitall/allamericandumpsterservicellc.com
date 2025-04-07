"use client";
import React from "react";
import Link from "next/link";
import CityData1 from "@/public/City.json";
import data1 from "@/components/Content/subDomainUrlContent.json";
import ContactInfo from "@/components/Content/ContactInfo.json";

const Page = () => {
  // const [host, setHost] = useState<string | null>(null);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const fullHost = window.location.host;
  //     const mainDomain = fullHost.replace(/^[^.]+\./, "");
  //     setHost(mainDomain);
  //     // console.log("host:", fullHost);
  //   }
  // }, []);

  const CityData: any = CityData1;
  const data: any = data1;

  const groupedByState = Object.keys(data).reduce(
    (acc, key) => {
      const component = data[key];
      const stateAbbreviation = key.split("-").pop();

      if (component.value === "state" && stateAbbreviation) {
        acc[stateAbbreviation] = {
          stateComponent: { name: component.name, slug: component.slug },
          cities: [],
        };
      } else if (stateAbbreviation && acc[stateAbbreviation]) {
        acc[stateAbbreviation].cities.push({
          name: component.name,
          slug: component.slug,
        });
      }

      return acc;
    },
    {} as Record<
      string,
      {
        stateComponent: { name: string; slug: string };
        cities: { name: string; slug: string }[];
      }
    >,
  );
  // const slugs = groupedByState.ny.cities.map(city => city.slug);
  // console.log(slugs);
  return (
    <div className="">
      <div>
        {Object.keys(groupedByState).map((stateAbbreviation) => {
          const { stateComponent, cities } = groupedByState[stateAbbreviation];
          return (
            <div key={stateAbbreviation}>
              <div className="mx-12 mt-7 text-xl font-bold">
                <Link
                  href={`https://${stateComponent.slug}.${ContactInfo.host}`}
                  className="duration-300 ease-in-out hover:text-main "
                >
                  {stateComponent.name}
                </Link>
              </div>
              <div className="mx-10 mt-2 flex h-fit w-auto flex-wrap gap-4 divide-x-2 divide-minor px-4 font-medium">
                {cities
                  .sort((a: any, b: any) => a.name.localeCompare(b.name))
                  .map((City: any, index: number) => {
                    return (
                      <div className="" key={index}>
                        <Link
                          href={`https://${City.slug}.${ContactInfo.host}`}
                          className="font scale-100 pl-4 duration-300 ease-in-out  hover:text-main"
                        >
                          {City.name}
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="flex flex-wrap px-2">{slugs.map((item: any) => <div className="px-4" key={item}>'{item}',</div>)}</div> */}
    </div>
  );
};

export default Page;
