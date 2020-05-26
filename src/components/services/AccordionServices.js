//IMPORTS
//-Modules
import React from 'react'
//-Components
import AccorionSection from './AccordionSection'

//DATA (STRAPI)
const accordionData = [
  {
    title: "Creativity",
    text: "Text Here"
  },
  {
    title: "Branding",
    text: "Text Here"
  },
  {
    title: "Development",
    text: "Text Here"
  },
]


function AccordionServices() {
  return (
    <>
      {accordionData.map( section => {
        return <AccorionSection title={section.title} text={section.text} />
      })}
    </>
  )
}
export default AccordionServices