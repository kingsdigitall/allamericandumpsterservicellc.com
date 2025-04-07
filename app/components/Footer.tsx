import Image from "next/image";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import contentData from "@/components/Content/footer.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
const Footer = () => {
  return (
    <div className=" flex w-full items-center justify-center bg-[#eeecec]">
      <div className=" flex w-full  items-center justify-center overflow-hidden">
        <div className=" mt-8 flex w-full flex-col  items-center justify-center md:min-w-[650px] ">
          <div className="mt-8 flex w-fit flex-col justify-center gap-2 px-6  text-white md:w-full  md:flex-row md:items-start   md:justify-around md:px-20 ">
            {/* <div className="flex flex-col items-center justify-center shadow-sm md:w-80    ">
              <h2 className="mt-14 w-fit border-b-2 border-minor text-3xl font-semibold sm:mt-0">
                Stay Tuned
              </h2>
              <div className="mt-8  flex w-full  items-center justify-around gap-4   ">
                <Link aria-label="Facebook" href="https://www.facebook.com/">
                  <BsFacebook className="text-2xl" />
                </Link>
                <Link aria-label="Twitter" href="https://twitter.com/">
                  <BsTwitter className="text-2xl" />
                </Link>
                <Link aria-label="Pinterest" href="https://www.pinterest.com/">
                  <BsPinterest className="text-2xl" />
                </Link>
                <Link aria-label="Youtube" href="https://www.youtube.com/">
                  <GrYoutube className="text-2xl" />
                </Link>
                <Link aria-label="Instagram" href="https://www.instagram.com/">
                  <BsInstagram className="text-2xl" />
                </Link>
              </div>
            </div> */}
            <div className="mt-4 flex   items-center justify-center text-2xl md:mt-0 md:w-80 ">
              <Image
                src={`/${contentData.logo}`}
                height={10000}
                width={10000}
                className="w-full object-cover  "
                alt={contentData.logo.split(".")[0]}
                title={contentData.logo.split(".")[0]}
              />
            </div>
            {/* <div className="mt-20  flex flex-col items-center   justify-center text-xl md:mt-0  md:w-80 ">
              <h2 className=" w-fit border-b-2 border-minor  text-3xl font-semibold">
                Our Company{" "}
              </h2>
              <div className="mt-6 flex  flex-col gap-2">
                <Link href="/locations">
                  <p className="">Location</p>
                </Link>
                <Link href="">
                  <p className="">Blogs </p>
                </Link>
                <Link href="/contact">
                  <p className="">Contact </p>
                </Link>
                <Link href="/about">
                  <p className="">About </p>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="mx-9 mt-10 border-t-2 border-minor text-center  text-xl text-main ">
            <p className="my-2">
            Copyright &#169;2025 {ContactInfo.name}, All Right Reserved
            </p>
          </div>
        </div>
      </div>
      {/*  cursor-default   bg-[#151627] grid place-items-center w-screen md:w-full min-w-[375px] */}
    </div>
  );
};

export default Footer;
