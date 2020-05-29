//IMPORTS
//-Modules
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//-Images
import cross from '../../imgs/cross.svg'


//STYLES
//-Variables
//-Components
const ButtonBox = styled.div`
    position: absolute;
    top: 11px;
    right: 11px;
    width: 60px;
    height: 60px;
    cursor: pointer;
`
const CrossIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`


//MAIN COMPONENT
function ArrowDownButton() {
  return (
    <>
      {/* Previous Path? */}
      <Link to="/">
        <ButtonBox>
          <CrossIcon src={cross}/>
        </ButtonBox>
      </Link>
    </>
  )
}
export default ArrowDownButton