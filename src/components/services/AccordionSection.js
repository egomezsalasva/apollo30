//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components

//STYLES
const AccordionContainer = styled.div`
    
`
const AccordionTitle= styled.div`
    
`
const AccordionText= styled.div`
    
`

//MAIN COMPONENT
function AccordionSection({title, text}) {

    

  return (
    <AccordionContainer>
      <AccordionTitle>{title}</AccordionTitle>
      <AccordionText>{text}</AccordionText>
    </AccordionContainer>
  )
}
export default AccordionSection