//IMPORTS
//-Modules
import React, { useEffect } from 'react'
import gsap from 'gsap'
//-Components
import HeroComp from '../components/home/HeroComp'
import HomeNav from '../components/home/HomeNav'


//MAIN COMPONENT
function Home() {

  //ANIMATION
  useEffect(()=>{
    const tl = gsap.timeline()
    tl.from([".planetLogo"], 1.2, {
      scale: 0.75,
      opacity: 0,
      ease: "power3.out",
    }).from([".letteringLogo", ".slogan" ], 1.2, {
      opacity: 0,
      ease: "power3.out",
    }).to([".servicesTitle", ".launchesTitle"], 1.2, {
      opacity: 1,
      y: 0,
      delay: -1.2,
      ease: "power3.out",
      stagger: {
        amount: 0.2
      } 
    })
  }, [])

  return (
    <>
      <HeroComp
        letteringLogoClass={"letteringLogo"}
        planetLogoClass={"planetLogo"}
        sloganClass={"slogan"}
      />
      <HomeNav 
        serviceTitleClass={"servicesTitle"} 
        launchesTitleClass={"launchesTitle"}
      />
    </>
  )
}
export default Home