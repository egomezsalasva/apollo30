//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components


//STYLES
//-Variables

//-Components
const Container= styled.div`
    margin-top: 45px;
`
const Title= styled.h2`
    display: block;
    color: ${props => props.theme.black};
    text-align: center;
    font-family: 'Gotham-Black';
    font-size: ${props => props.theme.mediumFontSize};
    line-height: 45px;
    letter-spacing: 0;
    cursor: pointer;
`


//MAIN COMPONENT
function LinksComp() {
  return (
      <Container>
            <a href="https://www.google.com/maps/place/Carrer+d'Enric+Morera,+5,+08902+L'Hospitalet+de+Llobregat,+Barcelona/@41.3626198,2.1253095,17z/data=!3m1!4b1!4m5!3m4!1s0x12a49895739007fb:0x7f9c9de080bbf73a!8m2!3d41.3626198!4d2.1274982" target="_blank" rel="noopener noreferrer">
                <Title>Maps</Title>
            </a>
            <a href="https://www.instagram.com/apollo30com/" target="_blank" rel="noopener noreferrer">
                <Title>Instagram</Title>
            </a>
            <a href="https://www.linkedin.com/company/apollo-30/" target="_blank" rel="noopener noreferrer">
                <Title>LinkedIn</Title>
            </a>
      </Container>
  )
}
export default LinksComp