"use client"
import About from "@/components/About"
import Explore from "@/components/Explore"
import Hero from "@/components/Hero"
import Menu from "@/components/Menu"
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
      
      <div className="h-[4000px]"></div>
    </div>
  )
}

export default Home