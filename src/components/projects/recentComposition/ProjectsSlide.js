//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import nikeTest from '../../../imgs/NikeTestProject.png'
import ProjectComp from './ProjectComp'



const Container = styled.div`
    position: relative;
    display: inline-block;
    width: 100vw;
    overflow: auto;
`
const InnerContainer = styled.div`
    position: relative;
    display: inline-block;
    width: calc( (257px * 6) + (15px * 6) + 30px);
    height: calc( 270px + 30px);
    overflow: auto;
`



//MAIN COMPONENT
function RecentComp() {
   
  return (
    <Container>
        <InnerContainer >
            <ProjectComp urlLink="/projects/nike" name="Nike" photo={nikeTest} />
            <ProjectComp urlLink="/projects/nike" name="Nike" photo={nikeTest} />
            <ProjectComp urlLink="/projects/nike" name="Nike" photo={nikeTest} />
            <ProjectComp urlLink="/projects/nike" name="Nike" photo={nikeTest} />
            <ProjectComp urlLink="/projects/nike" name="Nike" photo={nikeTest} />
            <ProjectComp urlLink="/projects/nike" name="Nike" photo={nikeTest} />
        </InnerContainer>
    </Container>
  )
}
export default RecentComp