//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'


//STYLES
//-Variables

//-Components
const Container = styled.div`
    
`
const NavOption = styled.div`
    
`


//MAIN COMPONENT
function HomeNav() {
  return (
    <Container>
      <NavOption to="/services"/>
      <NavOption to="/projects"/>
    </Container>
  )
}
export default HomeNav