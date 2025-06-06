import React from 'react'

import './App.css'
import HustlinHrdoos from './components/HustlinHrdoos'
import BreakingNews from './components/BreakingNews'
import LatestTweets from './components/LatestTweets'
import Minting from './components/Minting'
import MintingState from './components/MintingState'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Faqs from './components/Faqs'
import Footer from './components/footer'
import Marque from './components/Marque'
import Header from './components/Header'

function App() {

  return (
    <>
       <Marque />
      <Header/>
      <HustlinHrdoos />
      <BreakingNews />
      <LatestTweets/>
      <Minting />
      <MintingState/>
      <Roadmap/>
      <Team/>
      <Faqs />
      <Footer />
     
      
    </>
  )
}

export default App
