import axios from 'axios';
import  * as Cheerio  from 'cheerio';
import { useEffect, useMemo, useState } from "react";
import styles from './list.module.css'
import * as fs from 'node:fs';
import animeBD from './animeBD.json'

function AnimeList({search, BGthemes, BGthemesEl}){


    

    useEffect(()=>
        {
            // console.log(animeBD)
            const gender = animeBD.filter(filter =>{
                return filter.genres.find(
                    item => item == "Фэнтези" // поиск по массиву, который находится в массиве
                )
            });
  
        },[])


    const [topAnime, SetTopAnime] = useState([]);
    const sea = search
 
    const GetTopAnime = async() =>{
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${sea}`)
            .then(res => res.json());
        SetTopAnime(temp.data);
   
    } 
 
    const AnimeList = useMemo(GetTopAnime, [search])
    useEffect(()=>{
        AnimeList}, [search])

    return(
        <>
        <div className={styles.mainItem} style={{backgroundColor:`${BGthemes}`}}>
            <div className={styles.childItem} style={{backgroundColor:`${BGthemesEl}`}} >

                {topAnime.slice(0, 100).map(anime =>(
                    <div key = {anime.mal_id} className={styles.animeCard}>
                    <div className={styles.animeCard__img} style={{backgroundImage: `url(${anime.images.jpg.image_url})`}}></div>
                    <div className={styles.animeCard__info}>
                        <div className={styles.animeCard__info_title}>
                            <h1>{anime.title_english}</h1> 
                        </div>
                        <div className={styles.animeCard__characters } >
                            <h5>тип: {anime.type}</h5>
                        </div>
                        <div className={styles.animeCard__characters}>
                            <h5>Эпизоды: {anime.episodes}</h5>
                        </div>
                        <div className={styles.animeCard__characters}>
                            <h5>Рейтинг: {anime.rating}</h5>
                        </div>
                        <div className={styles.animeCard__characters}>
                            <h5>Статус: {anime.status}</h5>
                        </div>
                        <div className={styles.animeCard__characters}>
                             <h5>Год: {anime.year}</h5>   
                        </div>
                        <div className={styles.animeCard__button}></div>
                    </div>
                </div>
                ))}
                

            </div>
        </div>
       
        </>
  
    )
}
export default AnimeList;