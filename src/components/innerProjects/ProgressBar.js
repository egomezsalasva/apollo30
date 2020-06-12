//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Data
import projectData from '../../data/projectsData'

//STYLES
//-Variables

//-Components
const Container = styled.div`
  position: absolute;
  bottom: 0;
  height: 75px;
  width: 100%;
  background: yellow;
`
const BarContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  width: calc(100% - (w30px * 2) );
  background: green;
`

const numberOfSlides = projectData.nike.length


//MAIN COMPONENT
function ProgressBar() {
  return (
     <Container>
       <BarContainer>

       </BarContainer>
     </Container>
  )
}
export default ProgressBar