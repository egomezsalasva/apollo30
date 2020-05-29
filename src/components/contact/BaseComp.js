//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components


//STYLES
//-Variables
// const h17o5px = "2.62368816vh"
const h22px = "3.29835082vh"
const w285px = "76vw"
//-Components
const Container= styled.div`
    margin-top: 15px;
`
const Title= styled.h2`
    display: block;
    color: ${props => props.theme.black};
    text-align: center;
    padding: ${h22px} 0;
    font-family: 'Gotham-Black';
    font-size: ${props => props.theme.mediumFontSize};
    letter-spacing: 0;
    cursor: pointer;
`
const Text= styled.p`
    color: ${props => props.theme.black};
    font-size: ${props => props.theme.smallFontSize};
    line-height: 1.3;
    width: ${w285px};
    text-align: center;
    margin: 0 auto;
`


//MAIN COMPONENT
function BaseComp() {
  return (
      <Container>
          <Title>Base</Title>
          <Text>
            +(34) 693 03 76 82<br/>
            <br/>
            houston@apollo30.com<br/>
            <br/>
            Enric Morera 5-7<br/>
            L,Hospitalet, Barcelona, Spain
          </Text>
      </Container>
  )
}
export default BaseComp