import { useParams } from "react-router-dom";
import animeBD from "../main-section/amineList/listElement/animeBD.json"
import styles  from'./animePage.module.css'
import UpTitle from './page_element/img_titleInfo/Img_TitleInfo.jsx'
import MainInfo from './page_element/maininfo/mainInfo.jsx'
import Video from './page_element/video/video.jsx'
import { useState } from "react";

function AnimePage({BGthemes, BGthemesEl, BGthemesElText}){
    const {AnimeID} = useParams();
    const filters = animeBD.find(item => item.id == AnimeID)
    const[info, SetInfo] = useState(filters)

    return(
        <>

           <div className={styles.item}>
           <UpTitle info={info} BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText} />
           <MainInfo info={info} BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText} />
           <Video info={info} BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText} />
           </div>
  
        </>
    )
}
export default AnimePage;