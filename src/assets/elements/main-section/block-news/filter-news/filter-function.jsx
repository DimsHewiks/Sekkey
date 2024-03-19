

const filterNews = (props) => {
    const [value, setValue] = useState('')

    const [BDnews, setnews] = useState(newsBD)
    const filt = BDnews.filter(filter =>{
        return filter.title.toLowerCase().includes(news.toLowerCase())
    }) 

}

export default filterNews