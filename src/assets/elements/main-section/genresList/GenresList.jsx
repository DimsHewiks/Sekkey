import styles from "./GenresList.module.css"
import GenresBD from '../amineList/listElement/genres.json'

function GenresList({BGthemes, BGthemesEl, BGthemesElText}){

    return(
        
        <div style={{backgroundColor:`${BGthemes}`}} className={styles.Item}> 
            
            <div style={{backgroundColor:`${BGthemesEl}`}} className={styles.ItemChild}>
                <div className={styles.ItemChildTitle}>
                    <h1 style={{color:`${BGthemesElText}`}}>Жанры</h1>
                </div>
                <div className={styles.CaruselWindow}>

                    {GenresBD.map(genres =>(
                        <div className={styles.CaruselItem} style={{backgroundImage: `url(./c-3.jpg)`}}>
                            <div className={styles.CaruselItemDark} style={{backgroundColor:`${genres.color}`}}></div>
                            <h2>{genres.name}</h2>
                        </div>
                    ))}

                    

                </div>
            </div>
        </div>
    
    )
}
export default GenresList