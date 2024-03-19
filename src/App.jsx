import { useState } from 'react'
import Headered from './assets/elements/header/header.jsx'
import MainSection from './assets/elements/main-section/main-section.jsx'
import Themes from "./assets/elements/theme.json"
import Router from './router.jsx'

function App({BGthemes, BGthemesEl, BGthemesElText}) {

  
  return (
    <>
      <MainSection BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText}/>
    </>
  )
}

export default App
