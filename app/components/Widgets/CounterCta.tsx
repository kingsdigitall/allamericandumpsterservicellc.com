import React from "react";
import CountUp from "../Countup";
import CouterUpWithK from "../CouterUpWithK";
import ContactInfo from "@/components/Content/ContactInfo.json";
import { IoCallSharp } from "react-icons/io5";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { FaAward } from "react-icons/fa";

const CounterCta = () => {
  return (
    <div className=" bg-main text-white md:mt-20">
      <div className="item-center flex flex-col justify-around  px-10 py-10 md:flex-row md:py-20">
        <div className="md:w-[45%]">
          {/* <div className="w-fit rounded-full border border-white p-1 px-2 text-sm  font-semibold text-minor">
            NUMBER TALKS
          </div> */}
          <div className="mt-2 text-5xl">
            Streamline Your <span className="text-minor">Events</span> with
            Temporary Dumpster Rentals
          </div>
          <div className="mt-2">
            From home cleanouts to construction sites, our hassle-free dumpster
            rental services are tailored to keep your project efficient and
            tidy.
          </div>
          <div className="mt-4 hidden gap-4 md:flex">
            <a id='cta-id' href={`tel:${ContactInfo.tel}`}>
              <p id='cta-id' className="flex  h-14 w-14 items-center justify-center rounded-full bg-minor text-2xl duration-150 ease-in-out hover:scale-[1.2]">
                <IoCallSharp />
              </p>
            </a>
            <div className="flex flex-col text-lg ">
              <div className="">Ready to Clear the Clutter?</div>
              <div id='cta-id' className=" font-bold">
                <a href={`tel:${ContactInfo.tel}`}>{ContactInfo.No}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mdjustify-center mt-4 grid  grid-cols-1 gap-4 text-center text-3xl font-bold text-minor md:mt-0 md:w-[40%] md:grid-cols-2 ">
          <div className="flex flex-col items-center justify-center rounded-2xl border p-4 px-4 duration-150 ease-linear hover:border-minor hover:text-white md:w-60 md:p-0">
            Stress Less About Trash
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border p-4 px-4 duration-150 ease-linear hover:border-minor hover:text-white md:w-60 md:p-0">
            Save Time Online
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border p-4 px-4 duration-150 ease-linear hover:border-minor hover:text-white md:w-60 md:p-0">
            Dependable Service
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border p-4 px-4 duration-150 ease-linear hover:border-minor hover:text-white md:w-60 md:p-0">
            Free Delivery & Pickup
          </div>
        </div>
        <div className="mt-10 flex gap-4 md:hidden">
          <a href={`tel:${ContactInfo.tel}`}>
            <p className="flex  h-14 w-14 items-center justify-center rounded-full bg-minor text-2xl duration-150 ease-in-out hover:scale-[1.2]">
              <IoCallSharp />
            </p>
          </a>
          <div className="flex flex-col text-lg ">
            <div className="">Need Help?</div>
            <div className=" font-bold">
              <a href={`tel:${ContactInfo.tel}`}>{ContactInfo.No}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterCta;
