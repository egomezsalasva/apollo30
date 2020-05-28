//IMPORTS
//-Modules
import React, { useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
//-Components
import HeroComp from '../components/home/HeroComp'
import HomeNav from '../components/home/HomeNav'

//STYLES
//-Variables
const h125px = "18.7406296852vh"
//-Components
const Container = styled.div`
    position: relative;
    top: ${h125px};
    text-align: center;
`


//MAIN COMPONENT
function Home() {

  //ANIMATION
  useEffect(()=>{
    const tl = gsap.timeline()
    tl.from([".planetLogo"], 1.2, {
      scale: 0.75,
      opacity: 0,
      ease: "power3.out",
      delay: 0.7,
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
    <Container>
      <HeroComp
        letteringLogoClass={"letteringLogo"}
        planetLogoClass={"planetLogo"}
        sloganClass={"slogan"}
      />
      <HomeNav 
        serviceTitleClass={"servicesTitle"} 
        launchesTitleClass={"launchesTitle"}
      />
    </Container>
  )
}
export default Home