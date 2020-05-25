import React from 'react'
import styled from 'styled-components'

const Rectangle = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    width: 150px;
    height: 45px;
    background: white;
`
const RectangleV2 = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    width: 135px;
    height: 45px;
    border: white solid 2px;
`


function ContactButton() {
  return (
    <>
      <RectangleV2>

      </RectangleV2>
    </>
  )
}

export default ContactButton