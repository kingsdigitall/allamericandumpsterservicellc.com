"use client";
import Image from "next/image";
import Banner from "./Banner";
import ContactInfo from "@/components/Content/ContactInfo.json";
import WhyChoose from "./WhyChoose";
import ProcessWidgetComponent from "./ProcessWidgetComponent";
import gsap, { Back } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import HourCta from "./HourCta";
import { MdOutlinePhoneCallback } from "react-icons/md";
import homeData from "@/components/Content/home.json";
import Faq from "./Faq";
import Service from "@/app/components/Home/Service";
import ReviewWidget from "../Widgets/ReviewWidget";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import Navbar from "../Navbar";
import TypeOfDumpster from "../Widgets/TypeOfDumpster";
import ProcessWidget from "../Widgets/ProcessWidget";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const service = useRef<HTMLHeadingElement>(null);
  // const animateElement = (element: React.RefObject<HTMLElement>) => {
  //   if (element.current) {
  //     gsap.fromTo(
  //       element.current,
  //       { scale: 0.1, x: "-100vw" },
  //     {
  //       scale: 1,
  //       duration: 2,
  //       x: "0",
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: ".SERVICE",
  //         // markers: true,
  //         toggleActions: "restart ",
  //         start: "top 90%",
  //         end: "top 30%",
  //       },
  //     }
  //       // { y: 400, }, // Start from below
  //       // {
  //       //   y: 0,
  //       //   opacity: 1,
  //       //   duration: 0.5,
  //       //   ease: Back.easeInOut,
  //       //   scrollTrigger: {
  //       //     trigger: element.current,
  //       //     start: "top 80%",
  //       //     // end: "top 30%",
  //       //   },
  //       // }
  //     );
  //   }
  // };

  useGSAP(() => {
    // animateElement(h2Ref);
    // animateElement(service);
    gsap.fromTo(
      ".CONTENT",
      { scale: 0.1, x: "-100vw" },
      {
        scale: 1,
        duration: 1,
        x: "0",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".Form",
          // markers: true,
          toggleActions: "restart ",
          // end:"0px",
        },
      },
    );
    gsap.fromTo(
      ".IMAGE",
      { x: "100vw" },
      {
        x: "0",
        height: "100%",
        duration: 1.5,
        ease: Back.easeInOut,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".Form",
          // markers: true,
          toggleActions: "restart ",
          // end:"200px",
          once: false,
        },
      },
    );
    // gsap.fromTo(
    //   ".WIDGET1",
    //   { scale: 0.1, x: "-100vw" },
    //   {
    //     scale: 1,
    //     duration: 1,
    //     x: "0",
    //     stagger: 0.1,
    //     scrollTrigger: {
    //       trigger: ".WIDGET1",
    //       // markers: true,
    //       toggleActions: "restart ",
    //       // end:"0px",
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   ".WIDGET",
    //   { x: "100vw" },
    //   {
    //     x: "0",
    //     height: "100%",
    //     duration: 1.5,
    //     ease: Back.easeInOut,
    //     stagger: 0.1,
    //     scrollTrigger: {
    //       trigger: ".WIDGET",
    //       // markers: true,
    //       toggleActions: "restart ",
    //       // end:"200px",
    //       once: false,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   ".WIDGET2",
    //   { x: "100vw" },
    //   {
    //     x: "0",
    //     height: "100%",
    //     duration: 1.5,
    //     ease: Back.easeInOut,
    //     stagger: 0.1,
    //     scrollTrigger: {
    //       trigger: ".WIDGET2",
    //       // markers: true,
    //       toggleActions: "restart ",
    //       // end:"200px",
    //       once: false,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   ".PROCESS",
    //   { x: "100vw" },
    //   {
    //     x: "0",
    //     height: "100%",
    //     duration: 1.5,
    //     ease: Back.easeInOut,
    //     stagger: 0.1,
    //     scrollTrigger: {
    //       trigger: ".PROCESS",
    //       // markers: true,
    //       toggleActions: "restart ",
    //       // end:"200px",
    //       once: false,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   ".HOUR",
    //   { scale: 0.1, x: "-100vw" },
    //   {
    //     scale: 1,
    //     duration: 1,
    //     x: "0",
    //     stagger: 0.1,
    //     scrollTrigger: {
    //       trigger: ".HOUR",
    //       // markers: true,
    //       toggleActions: "restart ",
    //       // end:"0px",
    //     },
    //   }
    // );
  }, []);

  // useGSAP(() => {
  //   // Initialize ScrollSmoother
  //   //   ScrollSmoother.create({
  //   //   smooth: 1.5, // Adjust the smoothness
  //   //   effects: true,
  //   // });

  //   if (h2Ref.current) {
  //     gsap.fromTo(
  //       h2Ref.current,
  //       { y: 100, opacity: 0 }, // Start from below
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 3.5,
  //         ease: "easeInOut",
  //         scrollTrigger: {
  //           trigger: h2Ref.current,
  //           start: "top 80%",
  //           end: "top 30%",
  //           scrub: true,
  //         },
  //       }
  //     );
  //   }
  // }, []);

  return (
    <div className="">
    <Navbar/>
    <div className="w-screen overflow-hidden md:flex md:w-full md:flex-col md:items-center md:justify-center">
      <div className="w-full overflow-hidden text-lg print:hidden dark:bg-white dark:text-black">
        {/* poster */}
        <Banner
          h1={homeData.h1Banner}
          image={homeData.bannerImage}
          header={homeData.bannerQuote}
          p1={homeData.metaDescription}
        />
        {/* poster */}
        {/* Section 1 */}
        <div
          ref={h2Ref}
          className="my-10 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-24"
        >
          <div className="CONTENT flex flex-col justify-center">
            <h2 className="text-first text-3xl font-bold">{homeData.h2}</h2>
            <div
              className="mt-4 text-justify"
              dangerouslySetInnerHTML={{ __html: homeData.p2 }}
            ></div>
          </div>
          <div className="IMAGE">
            <Image
              height={10000}
              width={10000}
              src={`${homeData.h2Image}`}
              className="h-full w-full rounded-lg object-cover shadow-lg"
              alt={homeData.h2Image.split(".")[0]}
              title={homeData.h2Image.split(".")[0]}
            />
          </div>
        </div>
        {/* Section 1 */}
        {/* Section 2 */}
        <div className="SERVICE mt-20">
          <div className=" " ref={service}>
            <Service />
            <TypeOfDumpster/>
          </div>
        </div>
        {/* Section 2 */}
        {/* Section 4 */}
        <div className="WIDGET">
          <WhyChoose data={homeData.whyChooseSection} />
        </div>
        {/* Section 4 */}
        {/* Section 5 */}
        <div className="mt-20 grid grid-cols-1 gap-6 bg-main md:grid-cols-2">
          <div className="WIDGET1 flex flex-col justify-center px-4 pt-4 text-white md:px-10 md:pt-0">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={false}
            >
              {" "}
              <h2 className="text-3xl font-semibold">{homeData.h3}</h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={false}
            >
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: homeData.p3 }}
              ></div>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={false}
            >
              <div className="mt-4 w-fit">
                <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
                  <button
                    id="cta-id"
                    className="flex w-full items-center justify-center rounded-md border border-white bg-main px-10 py-2 font-bold text-white duration-100 ease-in-out hover:scale-110 hover:bg-minor"
                  >
                    <MdOutlinePhoneCallback className="text-2xl" />
                    Call Now
                  </button>
                </a>
              </div>
            </Fade>
          </div>
          <Fade
            direction="right"
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={false}
          >
            <div className="WIDGET2 w-full object-cover">
              <Image
                height={500}
                width={500}
                src={`${homeData.h3Image}`}
                className="h-96 w-full overflow-hidden object-cover"
                alt="standing-and-holding-notepad-plumber-in-blue-uniform"
                title="standing-and-holding-notepad-plumber-in-blue-uniform"
              />
            </div>
          </Fade>
        </div>
        {/* Section 5 */}
        {/* Our Process */}
        <div className="PROCESS">
          <ProcessWidget/>
        </div>
        {/* Our Process */}
        {/* CTA */}
        <div className="HOUR mt14 md:mt-16 ">
          <HourCta />
        </div>
        {/* CTA */}
        {/* FAQ */}
        <Faq  />
        {/* FAQ */}
        {/* Review */}
        <ReviewWidget />
        {/* Review */}
        {/* Map */}
        <div className="block w-full">
          <div className="mt-20 overflow-hidden rounded-xl border">
            <iframe
              title="Google Map"
              height="350"
              width={"100%"}
              src={`https://maps.google.com/maps?q=+usa&t=&z=4&ie=UTF8&iwloc=&output=embed`}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* Map */}
      </div>
    </div>
    </div>
  );
};

export default Hero;
