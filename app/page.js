import styles from './home.module.scss'
import { getRandomInt } from '@/utils/getRandomInt'
import { filterArtistListData, filterSliderData } from '@/utils/filterData'
import { getData } from '@/services/getData'
import { randFirstName } from '@ngneat/falso';
import getArtistList from '@/cache/artistList/artistListPreCache'
import HomeClient from './homeClient'
const numberOfImages = 10;
const imageUrl = "/assets/previewImage.jpg"
export const metadata = {
    title: 'Home page',
    description: 'Embark on an artistic odyssey at the Gallery: Where visionaries and enthusiasts converge, celebrating the boundless beauty of creativity',
    colorScheme: 'light only',
    openGraph: {
      type:'website',
      url:'https://gallery-eight-kappa.vercel.app/',
      title: 'Home page',
      description:'Embark on an artistic odyssey at the Gallery: Where visionaries and enthusiasts converge, celebrating the boundless beauty of creativity',
      images:[{
        url: imageUrl,
      }] ,
      siteName:'Gallery by Somani'
    },
    twitter: {
      title: 'Home page',
      description:'Embark on an artistic odyssey at the Gallery: Where visionaries and enthusiasts converge, celebrating the boundless beauty of creativity',
      images: [imageUrl]
    }
}

// export const revalidate = 86400;
export const revalidate = 3600 * 4;

export default async function Home() {
    const key = process.env.API_KEY;
    const baseURL = process.env.BASE_URL;
    
    const topPicksURL =`${baseURL}/collections/${getRandomInt(1,5)}/photos?per_page=${numberOfImages}&client_id=${key}`;
    const topPicks = await getData(topPicksURL,filterSliderData )
  
    const recentURL =`${baseURL}/photos?page=1&per_page=${numberOfImages}&client_id=${key}`;
    const recent = await getData(recentURL, filterSliderData);
    
    const artistsListFromCache = await getArtistList()
    const artistList =artistsListFromCache;

  return (
    <>
      <main className={styles.main}>
        <HomeClient artistList={artistList} topPicks={topPicks} recent={recent}/>
      </main>
    </>
  )
}
