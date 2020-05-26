//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import AccorionSection from './AccordionSection'

//DATA (STRAPI)
const accordionData = [
  {
    id: 0,
    title: "Creativity",
    text: "We create content (advertising, film, social, digital and mobile) that transcends traditional media and blurs the lines between products, experiences, content and marketing"
  },
  {
    id: 1,
    title: "Branding",
    text: "Text Here"
  },
  {
    id: 2,
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
                      title={section.title} 
                      text={section.text} 
                  />
        })}
      </AccordionContainer>
  )
}
export default AccordionServices