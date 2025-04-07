import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const WhyChoose = ({ data }: any) => {
  const items = data.whyChooseData;
  return (
    <div className="mt-20 ">
      <h2 className="text-center text-2xl font-extrabold">
        Why Choose <span className="text-main">{data.title}</span>
      </h2>
      {/* -----------------------------------------card Start------------------------ */}
      <div className=" mt-16 grid grid-cols-1 gap-6 px-4   text-center text-lg sm:grid-cols-2 md:grid-cols-3 md:px-24 ">
        {items.map((items: any, index: number) => (
          <div
            className=" 1 rounded-md border px-4 py-4 shadow-md duration-300   ease-in hover:-translate-y-4 "
            key={index}
          >
            <div className="flex justify-center">
              <Image
                aria-hidden="true"
                src={`/${items.imageUrl}`}
                alt={items?.imageUrl.split(".")[0]}
                title={items?.imageUrl.split(".")[0]}
                loading="lazy"
                width={100}
                height={100}
                className=" h-35 w-[100px]"
              />
            </div>
            <h3 className="1 mt-2 text-xl font-bold  text-main">
              {items?.title}
            </h3>
            <p className="mt-4">{items?.description}</p>
          </div>
        ))}
      </div>
      {/* -----------------------------------------card End------------------------ */}
    </div>
  );
};

export default WhyChoose;
