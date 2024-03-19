import styles from './Items-block.module.css'
import { useState } from 'react'
import { newsBD } from './news'


 

const ItemsBlock = ({news, BGthemesEl, BGthemesElText}) => {
    if (news.image)
    return(
      <div key={news.id} className={styles.item} style={{backgroundColor:`${BGthemesEl}`}}>
        <div className={styles.title}>
            <h2>{news.title}</h2>
            <h4 >{news.date}</h4>
        </div>
        <div className={styles.body} style={{backgroundColor:`${BGthemesEl}`}}>
            <div className={styles.mainText}  style={{backgroundColor:`${BGthemesEl}`}}>
                <div className={styles.text} >
                    <h3 style={{color:`${BGthemesElText}`}}>{news.text}</h3>
                </div>
                <div className={styles.button} >
                    <button  style={{backgroundColor:`${BGthemesEl}`, color:`${BGthemesElText}`}}>read more</button>
                </div>
            </div>
            <div className={styles.img} style={{backgroundColor:`${BGthemesEl}`,backgroundImage: `url(${news.image})`}}></div>
        </div>
    </div>  
    )

    else 
        return (
            <div key={news.id} className={styles.itemNoImg} style={{backgroundColor:`${BGthemesEl}`}}>
                <div className={styles.title}>
                    <h2>{news.title}</h2>
                    <h4>{news.date}</h4>
            </div>
            <div className={styles.bodyNoImg} style={{backgroundColor:`${BGthemesEl}`}}>
                <div className={styles.mainTextNoImg} style={{backgroundColor:`${BGthemesEl}`}}>
                    <div className={styles.text}>
                        <h3 style={{color:`${BGthemesElText}`}}>{news.text}</h3>
                    </div>
                    <div className={styles.button}>
                        <button style={{backgroundColor:`${BGthemesEl}`, color:`${BGthemesElText}`}}>read more</button>
                    </div>
                </div>
                <div className={styles.imgNoImage} style={{backgroundImage: `url(${news.image})`}}></div>
            </div>
            </div> 
        )
}
 export default ItemsBlock