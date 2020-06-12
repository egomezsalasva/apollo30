//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'

//STYLES
//-Variables
// const h75px = "11.2443778vh";
//-Components
const Container = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: calc( 100vh - ( 75px * 2 ) );
    width: 100vw;
    background: red;
`


//MAIN COMPONENT
function MainComp() {
  return (
     <Container>
        
     </Container>
  )
}
export default MainComp