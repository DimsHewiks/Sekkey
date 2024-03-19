//------------[plugins]-------------
import axios from 'axios';
import  * as Cheerio  from 'cheerio';
import * as fs from 'node:fs';
import puppeteer from 'puppeteer';
//-------------[files]--------------
import links from './genres.json' assert { type: "json" };
import { resolve } from 'node:path';


export const parse = async() =>{
    
    let linklist = [];
    linklist.push(links)
    let list = [];
    const getHTML = async(url) =>{
        const {data} = await axios.get(url, {mode: 'no-cors'})
        return Cheerio.load(data)
    }
        
    for(let ins = 1; ins <= 7; ins++){
 
      const $html = await getHTML(`https://yummyanime.tv/series/page/${ins}/`)

        $html('.section__content > .movie-item').each((i, element) =>{
            const item ={
                id: $html(element).find('a.movie-item__link').attr('href').replace(/[^0-9]/g, ''),
                title: $html(element).find('div.movie-item__title').text(),
                rating: $html(element).find('div.movie-item__rating').text(),
                series: $html(element).find('div.movie-item__label').text().replace(/[^0-9]/g, ''),
                year: $html(element).find('div.movie-item__meta').text().replace(/[^0-9]/g, ''),
                link: 'https://yummyanime.tv' + $html(element).find('a.movie-item__link').attr('href'),
                type: '',
                genres: [],
                studios: '',
                image:'https://yummyanime.tv' + $html(element).find('div.movie-item__img > img').attr('src'),
                AnimeVideoLink: '',
            };
            
            list.push(item)
            

        })
    console.log(`parse page:${ins} `)
    }
//----------------[добавление жанра в список аниме]--------------------


        for(let i =0; i< /*links.length-1*/ 10; i++){ //цикл для жанра
  
            const $htmlpage = await getHTML(`https://yummyanime.tv/${links[i].link}`);
            let pageNumber = $htmlpage('div.pagination__inner > a').eq(-1).text();
            let num = Number(pageNumber)
            if(!num)
                num = 1;

            console.log(num)
            
            //
            for(let ip =1; ip<=num; ip++){
                console.log(links[i].name + '| страница:'+ ip) 
                const $html = await getHTML(`https://yummyanime.tv/${links[i].link}/page/${ip}`)
                $html('.section__content > .movie-item').each((index, element) =>{
                    const title = $html(element).find('div.movie-item__title').text();
            
                     let filt = list.filter(filter =>{
                         return filter.title.includes((`${title}`))
                    }) 

                    

                    if(filt !=""){
                        console.log(title)
                        console.log(filt[0].title) 

                        if(filt[0].title == title)
                            filt[0].genres.push(links[i].name)
                        
                        console.log(filt)   
                    }
                }) 
            }
        }; 
//---------------------------------------------------------------





//-------------------------------[Поиск и добавление видео с аниме]----------------------------------
    const pup = async(link) => {
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-dev-shm-usage', // <-- add this one
                ],
        });
        const page = await browser.newPage();
            await page.goto(link ,{
                 waitUntil: "networkidle2"
            })
                await page.waitForSelector('iframe')
                console.log('iframes is load!')     
                const frames =await  page.$(".tabs-block__content > iframe");
                const frame = await frames.contentFrame();

                    await frame.waitForSelector('iframe')
                        const src = await frame.$eval('body > iframe', (el) => el.getAttribute('src'));
                        console.log('iframe is readed') 

        await browser.close();
        return src;       
    };

    for(let i =0; i <= list.length-1; i++){

        console.log(list[i].title)
        const result = await pup(list[i].link);
        list[i].AnimeVideoLink = result
        console.log(list[i])
    }
    

    
//-----------------------------------------------------------------------------------------------------

    //--------------------[запись даннных в json]----------------------
    fs.writeFile('animeBD.json', JSON.stringify(list), function(err){
        if(err) throw err
        console.log('saved json')
    })
//----------------------------------------------------------------------


    return list;

}

parse()
