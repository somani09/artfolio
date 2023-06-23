import Head from 'next/head'
import { Inter } from '@next/font/google'
import SlickCarousel from '@/components/commons/carousel/slickCarousel.js'
import ImageSlider from '@/components/commons/imageSlider/imageSlider.js'
import styles from './home.module.scss'
import { getRandomInt } from '@/utils/getRandomInt'
import { generateRandomWord } from '@/utils/generateRandomWord'
import { filterArtistListData, filterSliderData } from '@/utils/filterData'
import { getData } from '@/services/getData'
import Errors from '@/components/errors/errors'
const inter = Inter({ subsets: ['latin'] })

const numberOfImages = 2;
const numberOfArtists = 5;

export async function getServerSideProps() {

  const key = process.env.API_KEY;
  const baseURL = process.env.BASE_URL;
  
  const topPicksURL =`${baseURL}/collections/${getRandomInt(1,5)}/photos?per_page=${numberOfImages}&client_id=${key}`;
  const topPicks = await getData(topPicksURL,filterSliderData )


  const recentURL =`${baseURL}/collections/${getRandomInt(1,5)}/photos?per_page=${numberOfImages}&client_id=${key}`;
  const recent = await getData(recentURL, filterSliderData);

  const randomName = generateRandomWord();
  const artistListURL = `${baseURL}/search/users?per_page=${numberOfArtists}&query=${randomName}&client_id=${key}`;
  const artistList = await getData(artistListURL, filterArtistListData );


  return {
    props: {
      topPicks: topPicks,
      recent: recent,
      artistList: artistList,
    },
    //revalidate: 60, // Revalidate and regenerate the page every 60 seconds
  };
}


export default function HomePage({topPicks, recent, artistList}) {
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
            {artistList.status==200?<SlickCarousel data={artistList.data} />:<Errors />}
            
          </div>
        </div>
        <div className={styles.topPicks}>
          <div className={styles.sectionHeading}>Top Picks</div>
          {topPicks.status==200?<ImageSlider data={topPicks.data} /> :<Errors />}
        </div>
        <div className={styles.recent}>
          <div className={styles.sectionHeading}>Recent Uploads</div>
          {recent.status==200?<ImageSlider data={recent.data} />  :<Errors />}
        </div>
        </div>
      </main>
    </>
  )
}
