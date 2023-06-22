import Head from 'next/head'
import useSWR from 'swr'
import { Inter } from '@next/font/google'
// import styles from '@/styles/index.module.scss'
import SlickCarousel from '@/components/commons/carousel/slickCarousel.js'
import ImageSlider from '@/components/commons/imageSlider/imageSlider.js'
import styles from './home.module.scss'
import {artistData} from '../data/artistsData'
// import {topPicksData} from '../data/topPicksData'
import {recentData} from '../data/recentData'
import axios from 'axios'
import { getRandomInt } from '@/utils/getRandomInt'
import { generateRandomWord } from '@/utils/generateRandomWord'
import { filterArtistListData, filterSliderData } from '@/utils/filterData'
const inter = Inter({ subsets: ['latin'] })

const numberOfImages = 2;
const numberOfArtists = 5;

export async function getStaticProps() {

  const key = process.env.API_KEY;
  const baseURL = process.env.BASE_URL;
  
  const topPicksURL =`${baseURL}collections/${getRandomInt(1,20)}/photos?per_page=${numberOfImages}&client_id=${key}`;
  // console.log("url= ", topPicksURL);
  const topPicksData = await axios.get(topPicksURL)
  // console.log("data=", topPicksData)
  const filteredTopPicksData = filterSliderData(topPicksData.data);


  const recentURL =`${baseURL}collections/${getRandomInt(1,20)}/photos?per_page=${numberOfImages}&client_id=${key}`;
  const recentData = await axios.get(recentURL)
  const filteredRecentData = filterSliderData(recentData.data);

  const randomName = generateRandomWord();
  const artistListURL = `${baseURL}search/users?per_page=${numberOfArtists}&query=${randomName}&client_id=${key}`;
  const artistListData = await axios.get(artistListURL);
  const filteredArtistListData = filterArtistListData(artistListData.data.results);
  // console.log("url= ", artistListURL);
  // console.log("data=", filteredArtistListData)


  return {
    props: {
      topPicksData: filteredTopPicksData,
      recentData: filteredRecentData,
      artistListData: filteredArtistListData,
    },
    //revalidate: 60, // Revalidate and regenerate the page every 60 seconds
  };
}


export default function HomePage({topPicksData, recentData, artistListData}) {
  // console.log("topPicks Data = ", topPicksData)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="Gallery App" content="Personal Gallery project to practice Next Js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.home}>
        <div className={styles.carousel}>
          <div className={`${styles.artist} ${styles.sectionHeading}`}>Artists</div>
          <div className={styles.carouselContainer}>
            <SlickCarousel data={artistListData} />
          </div>
        </div>
        <div className={styles.topPicks}>
          <div className={styles.sectionHeading}>Top Picks</div>
          <ImageSlider data={topPicksData} />  
        </div>
        <div className={styles.recent}>
          <div className={styles.sectionHeading}>Recent Uploads</div>
          <ImageSlider data={recentData} />  
        </div>
        </div>
      </main>
    </>
  )
}
