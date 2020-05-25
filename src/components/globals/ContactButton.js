//IMPORTS
import React from 'react'
import styled from 'styled-components'



//STYLES
var buttonHeight = "45px"
var buttonColor = "white"

/*const ButtonBox = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    width: 150px;
    height: ${buttonHeight};
    background: ${buttonColor};
`*/

const ButtonBoxV2 = styled.div`
    position: absolute;
    top: 15px;
    /* top: 2.24887556vh; */
    left: 15px;
    /* left: 4vw; */
    width: 135px;
    height: ${buttonHeight};
    border: ${buttonColor} solid 2px;
    cursor: pointer;
`
const ButtonText = styled.h3`
    font-family: 'Press Start 2P';
    font-size: 12px;
    color: ${buttonColor};
    text-align: center;
    text-transform: uppercase;
    line-height: ${buttonHeight};
`



//MAIN COMPONENT
function ContactButton() {
  return (
    <>
      <ButtonBoxV2>
        <ButtonText>Contact</ButtonText>
      </ButtonBoxV2>
    </>
  )
}

export default ContactButton