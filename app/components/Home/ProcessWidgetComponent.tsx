import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ProcessWidgetComponent = ({ data }: any) => {
  return (
    <div className="mt-16">
      <h2 className="text-center text-3xl font-bold text-minor">
        {data.title}
      </h2>
      <section className="relative flex flex-col items-center justify-center gap-8 p-8  lg:mx-32">
        {/* Vertical Progress Bar */}
        <div className="absolute left-1/2  h-[90%] w-1 -translate-x-1/2 transform bg-gray-300 md:block"></div>
        <Fade
                      direction={"up"}
                      delay={800}
                      cascade
                      damping={1e-1}
                      triggerOnce={true}
                    >
        {/* Step 1 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg ">
          <div className="mb-4 text-xl font-bold text-main">
            Step 1: {data?.processData[0].title}
          </div>
          <p className="md:w-[50rem]">{data?.processData[0].description}</p>
          {/* <div className="absolute hidden md:block w-4 h-4 bg-white border-2 border-gray-500 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div> */}
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold text-main">
            Step 2: {data?.processData[1].title}
          </div>
          <p className="md:w-[50rem]">{data?.processData[1].description}</p>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold text-main">
            Step 3: {data?.processData[2].title}
          </div>
          <p className="md:w-[50rem]">{data?.processData[2].description}</p>
        </div>

        {/* Step 4 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold text-main">
            Step 4: {data?.processData[3].title}
          </div>
          <p className="md:w-[50rem]">{data?.processData[3].description}</p>
        </div>
        </Fade>
      </section>
    </div>
  );
};

export default ProcessWidgetComponent;
