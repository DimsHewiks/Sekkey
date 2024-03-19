import { useEffect, useState } from 'react';
import styles from './header.module.css'
import Themes from ".././theme.json"
import AnimeBD from "../main-section/amineList/listElement/animeBD.json"

function header({setBGThemes, setBGThemesEl, setBGThemesElText}) {
    
    const [bd, setBD] = useState(AnimeBD)
    const [themes, setThemes] = useState(Themes[0].HeaderLight)
    const [trans, SetTrans] = useState(0)
    const [value, setValue] = useState('')
    const [dark, setDark] = useState('none');
    const [scroll, setScroll] = useState('scroll');
    
    useEffect(()=>{
        if(value){
            setDark('block')
            setScroll('hidden')
        }
            
        else{
            setScroll('scroll')
            setDark('none')
        }
        

    }, [value])



    function darks(){
        setValue('')
    }
    function Theme(){
        
        if(trans == 0){
             SetTrans(100)
             setThemes(Themes[0].HeaderDark);
             setBGThemes(Themes[0].BGColorDark);
             setBGThemesEl(Themes[0].BGColorElementDark);
             setBGThemesElText(Themes[0].BGColorElementDarkText);       
        }
        else{
            SetTrans(0)
            setThemes(Themes[0].HeaderLight);
            setBGThemes(Themes[0].BGColorLight);
            setBGThemesEl(Themes[0].BGColorElementLight);
            setBGThemesElText(Themes[0].BGColorElementLightText);  
        }     
    }
 
            const filter = bd.filter(filter=>{
                return filter.title.toLowerCase().includes(value.toLowerCase())
            })
            console.log(filter)
    
    return(
        <>
            <style>
                {
                    `body{
                        overflow-y: ${scroll};
 
                    }`
                }
            </style>
            <header className = {styles.item} style={{backgroundColor:`${themes}`}}>
                <div className={styles.dark} style={{display:`${dark}`}} onClick={darks}></div>
                <div className={styles.blockLeftandRight}><p>Hikkey</p></div>
                <div className={styles.CenterBlock}>
                    <form >
                        <div className={styles.CenterBlockChild}>
                            <input type="text" className={styles.input__Search} onChange={e => setValue(e.target.value)} value={value} placeholder='Введите название аниме...'/>
                            <button  className={styles.input__Search_button} style={{backgroundColor:`${themes}`}}></button>
                            <ul className={styles.listSearch}>
 
                                {value ? 
                                
                                    filter.slice(0, 20).map(list =>(
                                        
                                        <li  className={styles.listSearchItem}>
                                            <div className={styles.listSearchItemBlock}>
                                                <div className={styles.listSearchItemBlock__Image} style={{backgroundImage: `url(${list.image})`}}></div>
                                                <div className={styles.listSearchItemBlock__Info}> 
                                                    <div className={styles.listSearchItemBlock__InfoTitle}>
                                                        <h3>{list.title}</h3>
                                                    </div>
                                                    <div className={styles.listSearchItemBlock__InfoText}>
                                                        <div className={styles.ListSearch__InfoText__characterts}>
                                                            <div className={styles.ListSearch__genres}>
                                                                {list.genres.map(genre =>(
                                                                     <h5>{genre}</h5>
                                                                ))} 
                                                            </div>
                                                        </div>
                                                        <div className={styles.ListSearch__InfoText__characterts}>
                                                            <div className={styles.ListSearch__rating}> 
                                                                <h5>Оценка: <b>{list.rating}</b> </h5>
                                                            </div>
                                                        </div>
                                                        <div className={styles.ListSearch__InfoText__characterts}>
                                                            <div className={styles.ListSearch__series}>
                                                                <h5>Количество серий: {list.series} </h5>
                                                            </div>
                                                        </div>
                                                        <div className={styles.ListSearch__InfoText__text}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                : null
                            }
                                
                                
                                


                            </ul>
                        </div>
                    </form>
                </div>
                <div className={styles.blockLeftandRight}>
                    <div className={styles.blockLeftandRight__childRight}>
                        <div className={styles.childRight__ThemeWindow} onClick={e => Theme()}>
                            <div className={styles.childRight__Theme__Child} style={{
                                backgroundImage: `url(./SUN.png)`,
                                transform: `translateY(-${trans}%)`
                                }}></div>
                            <div className={styles.childRight__Theme__Child} style={{
                                backgroundImage: `url(./MOON.png)`,
                                transform: `translateY(-${trans}%)`
                                }}></div>
                        </div>
                        <div className={styles.childRight__LogWindow}></div>
                    </div>
                </div>
                
            </header>
        </>
    )

}
export default header;