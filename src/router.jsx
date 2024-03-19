import { Route, Routes, BrowserRouter } from "react-router-dom";

import App from './App.jsx'

import AnimePage from './assets/elements/animePage/animePage.jsx'
import Header from './assets/elements/header/header.jsx'
import Themes from './assets/elements/theme.json'
import { useState } from "react";
function Routerss(){
    const [BGthemes, setBGThemes] = useState(Themes[0].BGColorLight)
    const [BGthemesEl, setBGThemesEl] = useState(Themes[0].BGColorElementLight)
    const [BGthemesElText, setBGThemesElText] = useState(Themes[0].BGColorElementLightText)


    return ( 
    <BrowserRouter>
        <Header setBGThemes = {setBGThemes} setBGThemesEl={setBGThemesEl} setBGThemesElText={setBGThemesElText} />
        <Routes>
            <Route element={<App  BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText}/> } path='/' />
            <Route element={<AnimePage BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText}/>} path="anime/:AnimeID"/>
            <Route element ={<div>Not found</div>} path='*' />
        </Routes>
    </BrowserRouter>)
        

}
export default Routerss