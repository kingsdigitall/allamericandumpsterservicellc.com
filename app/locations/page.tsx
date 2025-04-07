import React from 'react'
import FullPage from '@/app/components/location/FullPage'
import contentData from "@/components/Content/location.json";
import Banner from '@/app/components/Home/Banner';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: {
    absolute: contentData.metaTitle,
  },
  description: contentData.metaDescription,
  alternates: {
    canonical: contentData.metaCanonical,
  },
};

const page = () => {
  return (
    <div className="">
    <Navbar/>
    <div>
      <Banner
        h1={contentData.h1Banner}
        image={contentData.bannerImage}
        header={contentData.bannerQuote}
        p1={contentData.p1Banner}
      />
      <div className="py-10">
        <h2 className="text-center text-3xl text-main">
          {" "}
          {contentData.areatitle}
        </h2>
      <FullPage />
      </div></div>
      </div>
  )
}

export default page