import React from 'react'

import './App.css'
import HustlinHrdoos from './components/HustlinHrdoos'
import BreakingNews from './components/BreakingNews'
import LatestTweets from './components/LatestTweets'
import Minting from './components/Minting'
import MintingState from './components/MintingState'

function App() {

  return (
    <>
      <HustlinHrdoos />
      <BreakingNews />
      {/* <LatestTweets/> */}
      <Minting />
      {/* <MintingState/> */}
    </>
  )
}

export default App
