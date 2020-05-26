//IMPORTS
//-Modules
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


//STYLES
//-Variables
var buttonHeight = "45px"
var buttonColor = "white"
//-Components
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
      <Link to="/contact">
        <ButtonBoxV2>
          <ButtonText to="/contact" >Contact</ButtonText>
        </ButtonBoxV2>
      </Link>
    </>
  )
}
export default ContactButton