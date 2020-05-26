//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components

//STYLES
//-Variables
const lightColour = "white"
const smallFont = "0.75em"
const mediumFont = "1.5625em"
const h17o5px = "2.62368816vh"
//-Components
const Container= styled.div`
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
    text-align: center;
    font-size: ${smallFont};
    display: none;
`

//MAIN COMPONENT
function AccordionSection({title, text}) {

    

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Container>
    </>
  )
}
export default AccordionSection