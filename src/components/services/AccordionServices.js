//IMPORTS
//-Modules
import React, {useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
//-Components


//DATA (STRAPI)
const accordionData = [
  {
    title: "Creativity",
    text: "We create content (advertising, film, social, digital and mobile) that transcends traditional media and blurs the lines between products, experiences, content and marketing."
  },
  {
    title: "Branding",
    text: "Todays consumers do not buy a brand,they must feel part of it. We help brands simplify and clarify who they are to better convey and truely connect with their target audience."
  },
  {
    title: "Development",
    text: "Once we have our user interface ready and our user experience thought out we do pixel perfect development."
  },
]


//STYLES
//-Variables
const lightColour = "white"
const smallFont = "0.75em"
const mediumFont = "1.5625em"
const h17o5px = "2.62368816vh"
const w285px = "76vw"
//-Components
const AccordionContainer= styled.div`
    margin-top: 50vh;
    transform: translateY(-50%);
`
const SectionContainer= styled.div`
    text-align: center;
    transition: all 1.6s; 
`
const Title= styled.h2`
    display: inline-block;
    color: ${lightColour};
    text-align: center;
    padding: ${h17o5px} 0;
    font-family: 'Gotham-Black';
    font-size: ${mediumFont};
    letter-spacing: 0;
    cursor: pointer;
`
const Text= styled.p`
    color: ${lightColour};
    font-size: ${smallFont};
    line-height: 1.3;
    width: ${w285px};
    text-align: center;
    margin: 0 auto;
    /* max-height: 0px;
    height: 0px;
    overflow: hidden;
    opacity: 0; */
    display: none;
`


//MAIN COMPONENT
function AccordionServices() {

  //ANIMATION
  //-Intro Animation
  useEffect(()=>{
    const introTl = gsap.timeline()
    introTl.from(".accordionTitle", 1.6, {
      opacity: 0,
      y: 15,
      ease: "power2.out",
      stagger: {
        amount: 0.4,
      },
    })
  }, [])

  //-Click One Animation
 


  return (
      <AccordionContainer>

        <SectionContainer>
          <Title className="accordionTitle">{accordionData[0].title}</Title>
          <Text>{accordionData[0].text}</Text>
        </SectionContainer>

        <SectionContainer>
          <Title className="accordionTitle" >{accordionData[1].title}</Title>
          <Text className="accordionTextTwo" >{accordionData[1].text}</Text>
        </SectionContainer>

        <SectionContainer>
          <Title className="accordionTitle">{accordionData[2].title}</Title>
          <Text className="accordionTextThree" >{accordionData[2].text}</Text>
        </SectionContainer>
        
      </AccordionContainer>
  )
}
export default AccordionServices