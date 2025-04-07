import Hero from './components/Home/Hero'
import homeData from "@/components/Content/home.json"

export async function generateMetadata(
) {
 
  return {
    title: homeData.metaTitle,
  description:homeData.metaDescription,
  alternates: {
    canonical: homeData.metaCanonical,
  }
    
  }
}
export default function Home() {
  return (
   <div className=""> 
    <Hero/>
   </div>
  )
}
