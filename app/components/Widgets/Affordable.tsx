import React from "react";
import contactInfo from "@/components/Content/ContactInfo.json";
const Affordable = () => {
  return (
    <div className="bg-gray-100 px-6 py-12 ">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-10 text-center lg:flex-row">
        <div className="lg:w-[40%]">
          <h2 className="text-3xl font-bold text-gray-800">
            Dumbster Services for Every Need
          </h2>
          <p className="mt-4 text-gray-600">
            Need a reliable dumpster rental service? All American Dumpster Experts is your
            solution. We provide a wide range of dumpster sizes to accommodate
            any project, big or small. Our team is dedicated to ensuring your
            waste disposal needs are met efficiently and effectively.
          </p>
          <a id='cta-id' href={`tel:${contactInfo.tel}`}>
            <button id='cta-id' className="mt-8 rounded-lg bg-minor px-6 py-3 text-white transition duration-700 ease-in hover:bg-main">
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
            <p className="mt-2 text-gray-600">
            Our mission is to become one of the leading waste disposal companies across USA. This approach helps us grow our inventory sustainably while meeting the unique needs of each client.    
            </p>
          </div>
          {/* Professional */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg border border-main bg-white p-6 shadow-md">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <GrUserWorker className='text-main text-xl'/>
            </div> */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">Our Ethics</h3>
            <p className="mt-2 text-gray-600">
              We operate with integrity and honesty. Our team is committed to upholding
              the highest standards of safety and environmental responsibility,
              ensuring that all waste is disposed of properly and ethically.
            </p>
          </div>
          {/* High Quality */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20">
            <FaRegThumbsUp className=' text-xl'/>
            </div> */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              Our vision is to continually innovate and
              improve our services, ensuring that we offer the best solutions
              for our clients while making a positive impact on the communities
              we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affordable;
