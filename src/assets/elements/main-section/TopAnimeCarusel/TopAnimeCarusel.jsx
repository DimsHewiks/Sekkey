import styles from './TopAnimeCarusel.module.css'
import animeBD from '.././amineList/listElement/animeBD.json'
import { Link, Outlet} from "react-router-dom";
import { useEffect, useState } from 'react';

function TopAnimeCarusel({BGthemes, BGthemesEl, BGthemesElText}){
    
    const [anime, setAnime] = useState();
    
    useEffect(()=>{
        setAnime(animeBD)

        
        console.log(animes.slice(0,9))
        
    },[])
  const animes = animeBD.filter(filter =>{
            return filter.rating.includes( // поиск по массиву, который находится в массиве
                "9." 
            )
        });


    return(
        <>
        <div className={styles.item} style={{backgroundColor:`${BGthemes}`}}>
            <div className={styles.Cilditem} style={{backgroundColor:`${BGthemesEl}`}}>
                <div className={styles.itemTitle}>
                    <h2 style={{color:`${BGthemesElText}`}}>
                        Топ по рейтингу:
                    </h2>
                </div>
                <div className={styles.itemMainSection}>
                    <div>
                        {animes.slice(0,9).map(anime =>{
                            return(
                            <Link to={`/anime/${anime.id}`} className={styles.caruselItem}  key ={anime.id} style={{backgroundImage: `url(${anime.image})`}} >
                            
                            <div className={styles.itemInfo}>
                                <div className={styles.itemInfoTitle} ><h2>{anime.title}</h2></div>
                                <div className={styles.itemInfotext}><p>Серий: {anime.series}</p></div>
                                <div className={styles.itemInfotext}><p>
                                    Оценка: <b className={styles.itemInfotextB} >{anime.rating}</b>
                                </p></div>
                            </div>

                        </Link> 
                        )})}
                        <Outlet />


                       
                    </div>
                </div>

            </div>
            
        </div>
        </>
    )

}
export default TopAnimeCarusel;