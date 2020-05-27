//IMPORTS
//-Modules
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
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
const h22px = "3.29835082vh"
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
    padding: ${h22px} 0;
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
    max-height: 0px;
    height: 0px;
    overflow: hidden;
    opacity: 0;
    transform-origin: center;
    transition: all 0.8s ease-in-out;
    ${props => props.opened && css`
      max-height: none;
      height: auto;
      overflow: visible;
      opacity: 1;
      margin-bottom: 15px;
      transform-origin: center;
      transition: all 0.8s ease-in-out;
    `}
`


//MAIN COMPONENT
function AccordionServices() {

  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)

  const clickHandlerOne = () => {
    setOne(!one)
    setTwo(false)
    setThree(false)
  }
  const clickHandlerTwo = () => {
    setOne(false)
    setTwo(!two)
    setThree(false)
  }
  const clickHandlerThree = () => {
    setOne(false)
    setTwo(false)
    setThree(!three)
  }

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

        <SectionContainer onClick={() => clickHandlerOne()}>
          <Title className="accordionTitle">{accordionData[0].title}</Title>
          <Text opened={one} >{accordionData[0].text}</Text>
        </SectionContainer>

        <SectionContainer onClick={() => clickHandlerTwo()}>
          <Title className="accordionTitle" >{accordionData[1].title}</Title>
          <Text opened={two} >{accordionData[1].text}</Text>
        </SectionContainer>

        <SectionContainer onClick={() => clickHandlerThree()}>
          <Title className="accordionTitle">{accordionData[2].title}</Title>
          <Text opened={three} >{accordionData[2].text}</Text>
        </SectionContainer>
        
      </AccordionContainer>
  )
}
export default AccordionServices