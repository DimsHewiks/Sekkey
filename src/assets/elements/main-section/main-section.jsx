import styles from './main-section.module.css'
import BlockNews from './block-news/Block-news.jsx'
import { useState } from 'react'
import Filtereds from './block-news/filter-news/filter-news.jsx'
import Carusel from './carusel/carusel.jsx'
import SearchList from './amineList/searchElement/search.jsx'
import AnimeList from './amineList/listElement/list.jsx'
import TopAnimeCarusel from './TopAnimeCarusel/TopAnimeCarusel.jsx'
import OngoingList from './ongoingList/OngoingList.jsx'
import GenresList from './genresList/GenresList.jsx'
import WebInfo from './web-info/webInfo.jsx'

import Themes from ".././theme.json"

function mainSection({BGthemes, BGthemesEl, BGthemesElText}) {

 
    const [filteredNews, setFilteredNews] = useState('');
    const [value, setValue] = useState('');
    const [anime, setAnime] = useState('');
    

    return(
        <>
             
            <Carusel BGthemes={BGthemes} BGthemesEl={BGthemesEl}/>   
            <TopAnimeCarusel BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText} />
            <OngoingList BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText}/>
            <GenresList BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText} />
            <WebInfo BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText}/>
            
           
        </>
    )

}
export default mainSection;