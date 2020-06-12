//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import nikeTest from '../../../imgs/NikeTestProject.png'
import ProjectComp from './ProjectComp'


const h270px = "40.4797601vh"

const Container = styled.div`
    position: relative;
    display: inline-block;
    width: 100vw;
    overflow: auto;
`
const InnerContainer = styled.div`
    position: relative;
    display: inline-block;
    width: calc( (34.0329835vh * 6) + (15px * 6) + 30px);
    height: calc( ${h270px} + 30px);
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