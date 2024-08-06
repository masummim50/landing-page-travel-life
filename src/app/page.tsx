import BestFeatures from '@/components/homepage/BestFeatures'
import Blogs from '@/components/homepage/Blogs'
import Featured from '@/components/homepage/Featured'
import Footer from '@/components/homepage/Footer'
import HeroSection from '@/components/homepage/HeroSection'
import PopularDestinations from '@/components/homepage/PopularDestinations'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <Featured/>
      <BestFeatures/>
      <PopularDestinations/>
      <Blogs/>
      <Footer/>
    </main>
  )
}
