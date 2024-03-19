import styles from './webInfo.module.css'

function WebInfo ({BGthemes, BGthemesEl, BGthemesElText}){
    return(
        <>
        <div className={styles.item} style={{backgroundColor:`${BGthemes}`}}>
            <div className={styles.SubItem} style={{backgroundColor:`${BGthemesEl}`}}>
                <div className={styles.TitleBlock}>
                    <h2 style={{color:`${BGthemesElText}`}}>О нас</h2>
                </div>
                <div className={styles.Content}>
                    <div className={styles.Img_Block}>
                        <div></div>
                    </div>
                    <div className={styles.Text_Block}>
                        <div className={styles.Text_Block__Title}></div>
                        <div className={styles.Text_Block__SubText}></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default WebInfo;