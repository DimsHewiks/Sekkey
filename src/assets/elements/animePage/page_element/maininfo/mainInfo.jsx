import styles from './maininfo.module.css'


function MainInfo({info, BGthemes, BGthemesEl, BGthemesElText}){
    return(
        <>
            <div className={styles.Item} style={{backgroundColor:`${BGthemes}`}}>
                <div  className={styles.ChildItem} style={{backgroundColor:`${BGthemesEl}`}}></div>
            </div>
        </>
    )
}
export default MainInfo