import styles from './video.module.css'


function Video({info, BGthemes, BGthemesEl, BGthemesElText}){
    return(
        <div className={styles.Item} style={{backgroundColor:`${BGthemes}`}}>
            <div className={styles.ChildItem} style={{backgroundColor:`${BGthemesEl}`}} >
                <div className={styles.ChildItem__Video}>
                <iframe src={`${info.AnimeVideoLink}`} frameborder="0" scrolling="no" allowfullscreen="" width="94%" height="92%" style={{borderRadius:'5px'}}></iframe>
                </div>
                <div className={styles.ChildItem__Info}>
                    <div className={styles.ChildItem__InfoTitle}>
                        <h2 style={{color:`${BGthemesElText}`}}>Комментарии:</h2>
                        <div className={styles.comments_Window}>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Video