//IMPORTS
//-Modules
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//-Images
import bitArrowDown from '../../imgs/bitArrowDown.svg'


//STYLES
//-Variables
//-Components
const ButtonBox = styled.div`
    position: absolute;
    top: 7.5px;
    right: 7.5px;
    width: 60px;
    height: 60px;
    cursor: pointer;
`
const ArrowIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`


//MAIN COMPONENT
function ArrowDownButton() {
  return (
    <>
      <Link to="/">
        <ButtonBox>
          <ArrowIcon src={bitArrowDown}/>
        </ButtonBox>
      </Link>
    </>
  )
}
export default ArrowDownButton