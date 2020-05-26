//IMPORTS
//-Modules
import React, {useState} from 'react'
import styled from 'styled-components'
//-Components
import AccorionSection from './AccordionSection'


//DATA (STRAPI)
const accordionData = [
  {
    id: 0,
    title: "Creativity",
    text: "We create content (advertising, film, social, digital and mobile) that transcends traditional media and blurs the lines between products, experiences, content and marketing."
  },
  {
    id: 1,
    title: "Branding",
    text: "Todays consumers do not buy a brand,they must feel part of it. We help brands simplify and clarify who they are to better convey and truely connect with their target audience."
  },
  {
    id: 2,
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
    margin: 0 auto 15px;
    display: ${props => props.active ? "inline-blockck" : "none"};;
`



function AccordionServices() {
  const [activeAccordionOne, setActiveAccordionOne] = useState(false)
  const [activeAccordionTwo, setActiveAccordionTwo] = useState(false)
  const [activeAccordionThree, setActiveAccordionThree] = useState(false)
  const activeAccordionOneHandler = () => {
    setActiveAccordionOne(!activeAccordionOne)
    setActiveAccordionTwo(false)
    setActiveAccordionThree(false)
  }
  const activeAccordionTwoHandler = () => {
    setActiveAccordionOne(false)
    setActiveAccordionTwo(!activeAccordionTwo)
    setActiveAccordionThree(false)
  }
  const activeAccordionThreeHandler = () => {
    setActiveAccordionOne(false)
    setActiveAccordionTwo(false)
    setActiveAccordionThree(!activeAccordionThree)
  }
  return (
      <AccordionContainer>
        {/* {accordionData.map( section => {
          return  <AccorionSection 
                      key={section.id} 
                      title={section.title} 
                      text={section.text} 
                  />
        })} */}
        <SectionContainer onClick={() => activeAccordionOneHandler()}>
          <Title>{accordionData[0].title}</Title>
          <Text active={activeAccordionOne}>{accordionData[0].text}</Text>
        </SectionContainer>
        <SectionContainer onClick={() => activeAccordionTwoHandler()}>
          <Title>{accordionData[1].title}</Title>
          <Text active={activeAccordionTwo}>{accordionData[1].text}</Text>
        </SectionContainer>
        <SectionContainer onClick={() => activeAccordionThreeHandler()}>
          <Title>{accordionData[2].title}</Title>
          <Text active={activeAccordionThree}>{accordionData[2].text}</Text>
        </SectionContainer>
      </AccordionContainer>
  )
}
export default AccordionServices