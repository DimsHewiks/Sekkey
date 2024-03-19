import styles from "./OngoingList.module.css"
import AnimeBd from '../amineList/listElement/animeBD.json'

function OngoingList({BGthemes, BGthemesEl, BGthemesElText}){


    const filterOngoing = AnimeBd.filter(filter =>{
        const ser = Number(filter.series)
        return ser <= 10
    })
  
    return(

        <div className={styles.item} style={{backgroundColor:`${BGthemes}`}}>
            <div className={styles.Childitem} style={{backgroundColor:`${BGthemesEl}`}}>
                <div className={styles.Childitem__Title}>
                    <h2 style={{color:`${BGthemesElText}`}}>Сейчас выходят:</h2>
                </div>
                <div className={styles.Childitem__List}>
                {filterOngoing.slice(0, 6).map(list =>{
                    return(
                    <div className={styles.ChildItem__Item} style={{backgroundImage: `url(${list.image})`}}>
                        <div >
                            <h3>{list.title}</h3>
                        </div>
                    </div>
                    )

                })  }
                    


                    

                </div>
            </div>
        </div>
    )
}

export default OngoingList;