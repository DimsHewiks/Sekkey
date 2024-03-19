import styles from './Img_TitleInfo.module.css'

function TitleInfo({info, BGthemes, BGthemesEl, BGthemesElText}){
    return(
        <>
            <div className={styles.item} style={{backgroundColor:`${BGthemes}`}}>
                <div className={styles.Childitem} style={{backgroundColor:`${BGthemesEl}`}}>
                    <div className={styles.Childitem__Img}>
                        <div style={{backgroundImage: `url(${info.image})`}}></div>
                        <a href="#">Смотреть онлайн</a>
                    </div>
                    <div className={styles.Childitem__InfoTitles}>
                        <div className={styles.Childitem__TitleName}>
                            <h1 style={{color:`${BGthemesElText}`}}>{info.title}</h1>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TitleInfo;