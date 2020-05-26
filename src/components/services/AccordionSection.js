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
const w285px = "76vw"
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
    font-size: ${smallFont};
    line-height: 1.3;
    width: ${w285px};
    text-align: center;
    margin: 0 auto 15px;
    display: ${props => props.active ? "inline-blockck" : "none"};;
`

//MAIN COMPONENT
function AccordionSection({title, text, activeState}) {

    

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Text active={activeState} >{text}</Text>
      </Container>
    </>
  )
}
export default AccordionSection