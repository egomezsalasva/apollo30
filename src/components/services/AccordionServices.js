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