import styles from './search.module.css'
import { useEffect, useMemo, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import './style.css'



function SearchList({setAnime, BGthemes, BGthemesEl, BGthemesElText}){
    const [show, SetShow] = useState(false)
    const [value, setValue] = useState();



  
    
    const asearch = (e) =>{
        e.preventDefault()
        setAnime(value)
        console.log(value)
    }
    

    return(
        <>
        <div className={styles.item} style={{backgroundColor:`${BGthemes}`}}>
            <div className={styles.unitem} style={{backgroundColor:`${BGthemesEl}`}}>
                <form action="search" className={styles.form}>
                    <input type="text" className={styles.input} onChange={e => setValue(e.target.value)} style={{backgroundColor:`${BGthemesEl}`, color: `${BGthemesElText}`}}/>
                    <button className={styles.button} onClick={e => asearch(e)}></button>
                    <h4 onClick={()=> SetShow(!show)} className={styles.filt} > Фильтры</h4>
                </form> 
                
            </div>
            
            <CSSTransition  in={show} timeout={300} classNames='alert' unmountOnExit>
                <div className={styles.filtWindow} style={{backgroundColor:`${BGthemesEl}`}}>

                        <div className={styles.filtWindowItems}>

                            <div className={styles.filtWindowItems1}>
                                <div className={styles.filtWindowItems1__Title}>
                                    <h3>Статус</h3>
                                </div>
                                <div className={styles.filtWindowItems1__WindowButton}>
                                    <div><input type="checkbox" name="status1" id="anons"/><label for="anons">Анонс</label></div>
                                    <div><input type="checkbox" name="status2" id="ongoing"/><label for="ongoing">Онгоинг</label></div>
                                    <div><input type="checkbox" name="status3" id="came out"/><label for="came">Вышел</label></div>
                                </div>
                            </div>
                            <div className={styles.filtWindowItems1}>
                            <div className={styles.filtWindowItems1__Title}>
                                    <h3>Тип</h3>
                                </div>
                                <div className={styles.filtWindowItems1__WindowButton}>
                                    <div><input type="checkbox" name="status1" id="tv__series"/><label for="tv__series">ТВ сериал</label></div>
                                    <div><input type="checkbox" name="status2" id="film"/><label for="film">Фильм</label></div>
                                    <div><input type="checkbox" name="status3" id="OVA"/><label for="OVA">ОВА</label></div>
                                </div>
                            </div>
                        
                        </div>

                        <div className={styles.filtWindowItems}>
                            <div className={styles.filtWindowItems2}>
                            <div className={styles.filtWindowItems1__Title}>
                                    <h3>Сортировка</h3>
                                </div>
                                <div className={styles.filtWindowItems1__WindowButton}>
                                    <div><input type="checkbox" name="status1" id="tv__series"/><label for="tv__series">ТВ сериал</label></div>
                                    <div><input type="checkbox" name="status2" id="film"/><label for="film">Фильм</label></div>
                                    <div><input type="checkbox" name="status3" id="OVA"/><label for="OVA">ОВА</label></div>
                                </div>
                            </div>
                            <div className={styles.filtWindowItems2}>
                            <div className={styles.filtWindowItems1__Title}>
                                    <h3>Год</h3>
                                </div>
                                <div className={styles.filtWindowItems1__WindowButton}>
                                    <div><input type="checkbox" name="status1" id="tv__series"/><label for="tv__series">ТВ сериал</label></div>
                                    <div><input type="checkbox" name="status2" id="film"/><label for="film">Фильм</label></div>
                                    <div><input type="checkbox" name="status3" id="OVA"/><label for="OVA">ОВА</label></div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.filtWindowItems}>
                        <div className={styles.filtWindowItems1__Title}>
                                    <h3>Рейтинг</h3>
                                </div>
                                <div className={styles.filtWindowItems1__WindowButton}>
                                    <div><input type="checkbox" name="status1" id="tv__series"/><label for="tv__series">ТВ сериал</label></div>
                                    <div><input type="checkbox" name="status2" id="film"/><label for="film">Фильм</label></div>
                                    <div><input type="checkbox" name="status3" id="OVA"/><label for="OVA">ОВА</label></div>
                                </div>
                        </div>

                        <div className={styles.filtWindowItems}>
                        <div className={styles.filtWindowItems1__Title}>
                                    <h3>Жанр</h3>
                                </div>
                                <div className={styles.filtWindowItems1__WindowButton}>
                                    <div><input type="checkbox" name="status1" id="tv__series"/><label for="tv__series">ТВ сериал</label></div>
                                    <div><input type="checkbox" name="status2" id="film"/><label for="film">Фильм</label></div>
                                    <div><input type="checkbox" name="status3" id="OVA"/><label for="OVA">ОВА</label></div>
                                </div>
                        </div>

                </div> 
            </CSSTransition>
            
                

            

        </div>
        </>
    )
}
export default SearchList