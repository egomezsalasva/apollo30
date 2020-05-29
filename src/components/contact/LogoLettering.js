//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Images
import letteringBlackApollo from '../../imgs/letteringBlackApollo.svg'


//STYLES
//-Variables
const h33px = "4.94752624vh"
const h90px = "13.4932534vh"

//-Components
const Lettering = styled.img`
    position: relative;
    top: ${h90px};
    display: block;
    width: 100%;
    height: ${h33px};
    text-align: center;
`


//MAIN COMPONENT
function LogoLettering() {
  return (
    <>
      <Lettering src={letteringBlackApollo} alt="Apollo30 Lettering" />
    </>
  )
}
export default LogoLettering