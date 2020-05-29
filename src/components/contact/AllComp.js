//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import LogoLettering from './LogoLettering'
import BaseComp from './BaseComp'

const Container = styled.div`

`


function AllComp() {
  return (
    <Container>
      <LogoLettering />
      <BaseComp />
      
    </Container>
  )
}
export default AllComp