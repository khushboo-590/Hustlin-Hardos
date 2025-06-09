import React from 'react'
import './App.css'
import BreakingNews from './components/BreakingNews'
import LatestTweets from './components/LatestTweets'
import Minting from './components/Minting'
import MintingState from './components/MintingState'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Header from './components/Header'
import BackToTop from './components/common/BackToTop'
import HustlinHardos from './components/HustlinHardos'
import StrokeRate from './components/StrokeRate'

function App() {
  return (
    <>
       <StrokeRate/>
      <Header/>
      <HustlinHardos/>
      <BreakingNews />
      <LatestTweets/>
      <Minting />
      <MintingState/>
      <Roadmap/> 
      <Team/>
      <Faqs />
      <Footer />
      <BackToTop/>     
    </>
  )
}

export default App
