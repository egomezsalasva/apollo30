//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Data
import projectData from '../../data/projectsData'


const numberOfSlides = projectData.nike.length

//STYLES
//-Variables
const w30px = "8vw"
const heightOfBar = "4px"
//-Components
const Container = styled.div`
  position: absolute;
  bottom: 0;
  height: 75px;
  width: 100%;
  background: yellow;
`
const AllBarsContainer = styled.div`
  width: calc( 100% - ( ${w30px} * 2 ) );
  height: ${heightOfBar};
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: green;
`
const BarContainer = styled.div`
  position: relative;
  top: calc( -15px + ${heightOfBar});
  display: inline-block;
  width: calc( ( 100% / ${numberOfSlides} ) - 15px);
  height: 100%;
  background: pink;
  margin: 0 7.5px;
`




//MAIN COMPONENT
function ProgressBar() {
  return (
     <Container>
       <AllBarsContainer>
          <BarContainer>

          </BarContainer>
          <BarContainer>
            
          </BarContainer>
          <BarContainer>
            
          </BarContainer>
          <BarContainer>
            
          </BarContainer>
          <BarContainer>
            
          </BarContainer>
       </AllBarsContainer>
     </Container>
  )
}
export default ProgressBar