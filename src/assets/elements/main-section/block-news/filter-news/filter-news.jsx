import { useState,useEffect } from "react"
import {newsBD} from '../items-block/news.js'
import styles from './filter.module.css'


const Filtereds = ({setValue, news, setread, BGthemes, BGthemesElText}) =>{
    const [BDnews, SetBDnes] = useState(newsBD)
    const filt = BDnews.filter(filter =>{
            return filter.title.toLowerCase().includes(news.toLowerCase())
       }) 
   useEffect(() =>
    {
        
       setread(filt)
    },[news])
    

    return(
  

        <div > <form  action="search" className={styles.form} style={{backgroundColor:`${BGthemes}`, color:`${BGthemesElText}`}}>
                <h4 style={{color:`${BGthemesElText}`}}> Поиск : </h4><input type="text" onChange={(e) => setValue(e.target.value)}/>
        </form></div>
    )
}
export default Filtereds;