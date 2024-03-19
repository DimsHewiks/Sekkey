import ItemsBlock from './items-block/ItemsBlock.jsx'; // fix file extension
import styles from './Block-news.module.css';
import { newsBD } from './items-block/news.js';
import { useState, useMemo } from 'react'


const BlockNews = ({news, filtnews, BGthemes, BGthemesEl, BGthemesElText}) => {
    const [BDnews, setnews] = useState(newsBD)

    const [filter, setfilter] = useState(filtnews)

    const filt = BDnews.filter(filter =>{
        return filter.title.toLowerCase().includes(news.toLowerCase())
   }) 

    
   
   return (
    <>
    <div className={styles.item} style={{backgroundColor:`${BGthemes}`}}>
    {newsBD.length ? ( 

    filt.map(news => {
             return <ItemsBlock key={news.id} news={news} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText}/>; 
            })
    ) : (
        <p>Новостей нет</p>
        )}
    </div> 
    </>
    );
};

export default BlockNews;