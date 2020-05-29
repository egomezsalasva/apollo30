//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import Cross from '../components/contact/Cross'
import AllComp from '../components/contact/AllComp'


const Container = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    width: 100vw;
    height: 100vh;
    background: white;
`


function Contact() {
  return (
    <Container>
      <Cross />
      <AllComp />
      
    </Container>
  )
}
export default Contact