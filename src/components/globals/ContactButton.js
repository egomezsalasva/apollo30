//IMPORTS
import React from 'react'
import styled from 'styled-components'



//STYLES
/*const Rectangle = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    width: 150px;
    height: 45px;
    background: white;
`*/

const RectangleV2 = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    width: 135px;
    height: 45px;
    border: white solid 2px;
`
const ContactText = styled.h3`
    font-family: 'Press Start 2P';
    font-size: 12px;
    color: #FFFFFF;
    text-align: center;
    text-transform: uppercase;
    line-height: 45px;
`



//MAIN COMPONENT
function ContactButton() {
  return (
    <>
      <RectangleV2>
        <ContactText>Contact</ContactText>
      </RectangleV2>
    </>
  )
}

export default ContactButton