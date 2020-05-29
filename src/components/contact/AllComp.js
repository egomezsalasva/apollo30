//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import LogoLettering from './LogoLettering'
import BaseComp from './BaseComp'
import LinksComp from './LinksComp'

const Container = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`


function AllComp() {
  return (
    <Container>
      <LogoLettering />
      <BaseComp />
      <LinksComp />
    </Container>
  )
}
export default AllComp