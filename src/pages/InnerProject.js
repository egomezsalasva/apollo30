//IMPORTS
//-Modules
import React from 'react'
//-Components
import ArrowDownButton from '../components/globals/ArrowDownButton'
import MainComp from '../components/innerProjects/MainComp'
import ProgressBar from '../components/innerProjects/ProgressBar'



//MAIN COMPONENT
function InnerProjects() {
  return (
    <>
      <ArrowDownButton/>
      <MainComp />
      <ProgressBar />
    </>
  )
}

export default InnerProjects