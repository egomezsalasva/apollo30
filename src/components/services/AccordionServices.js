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
    active: false,
    title: "Creativity",
    text: "We create content (advertising, film, social, digital and mobile) that transcends traditional media and blurs the lines between products, experiences, content and marketing"
  },
  {
    id: 1,
    active: false,
    title: "Branding",
    text: "Text Here"
  },
  {
    id: 2,
    active: false,
    title: "Development",
    text: "Text Here"
  },
]

//STYLES
const AccordionContainer= styled.div`
    margin-top: 50vh;
    transform: translateY(-50%);
`


function AccordionServices() {


  return (
      <AccordionContainer>
        {accordionData.map( section => {
          return  <AccorionSection 
                      key={section.id} 
                      activeState={section.active} 
                      title={section.title} 
                      text={section.text} 
                  />
        })}
      </AccordionContainer>
  )
}
export default AccordionServices