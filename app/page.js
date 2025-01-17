"use client"
import About from "@/components/About"
import Explore from "@/components/Explore"
import Hero from "@/components/Hero"
import Menu from "@/components/Menu"
import OpeningHours from "@/components/OpeningHours"
import Testimonials from "@/components/Testimonials"
import { useEffect } from "react"


const Home = () => {
  useEffect(() => {
    
    const loadLomotiveScroll = async () => {
        const LocomotiveScrol = (await import("locomotive-scroll")).default

        new LocomotiveScrol()
    }
    loadLomotiveScroll()
  
  }, [])
  
  return (
    <div className="h-full overflow-x-hidden">
      <Hero/>
      <Explore />
      <About/>
      <Menu />
      <Testimonials />
      <OpeningHours />
  
    </div>
  )
}

export default Home