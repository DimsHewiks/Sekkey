import { useState } from 'react'
import styles from './carusel.module.css'
import {caruselBD} from './caruselBD.js'

function Carusel({BGthemes}){

    const [transform, setTransform] = useState(0);
    const move = 100;
    const max_move = 100*(caruselBD.length-1) 
 

    function moveleft(){
        const left = transform + move 
         if(left > 0)
            setTransform(0);
        else
            setTransform(left);

    }

    function moveright(){
        const right = transform - move 
         if(right < -(max_move))
            setTransform(-(max_move));
        else
            setTransform(right);

    }


return(
    <>
    <div className={styles.item} style={{backgroundColor:`${BGthemes}`}}>
        <div className={styles.MainItem}>
            <div className={styles.MainItemImg}>
                
                <div className={styles.leftbutton} >
                    <div className={styles.leftbuttonItem}>
                        <button className={styles.leftbuttonItemButton } onClick={moveleft}/>
                    </div>
                </div>

                {caruselBD.map(carusels =>(
                    <div key ={carusels.id} className={styles.ImgBlock} style={{
                        backgroundImage: `url(${carusels.image})`,
                        transform: `translateX(${transform}%)`
                    }}>
                        <div className={styles.caruselTitle}>
                            <h1>{carusels.title}</h1>
                        </div>
                        <div className={styles.caruselText}>
                            <h3 >{carusels.text}</h3>
                        </div>
                        <button className={styles.caruselbutton}>Смотреть</button>
                    </div>
                ))}
                <div className={styles.rightbutton}>
                    <div className={styles.leftbuttonItem}>
                        <button className={styles.leftbuttonItemButton } onClick={moveright}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Carusel;