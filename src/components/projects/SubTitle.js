//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'

//STYLES
//-Components
const Title = styled.h4`
    font-family: 'Gotham-Black';
    font-size: 14px;
    color: ${props => props.theme.white};
    letter-spacing: 0;
    margin-left: 30px;
    margin-bottom: ${props => props.marginBottom};
`

//MAIN COMPONENT
function SubTitle(props) {
  return (
  <Title marginBottom={ props.marginBottom || "45px" }>{props.children}</Title>  
  )
}
export default SubTitle