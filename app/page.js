import styles from './home.module.scss'
import { getRandomInt } from '@/utils/getRandomInt'
import { filterArtistListData, filterSliderData } from '@/utils/filterData'
import { getData } from '@/services/getData'
import { randFirstName } from '@ngneat/falso';
import getArtistList from '@/cache/artistList/artistListCache'
import HomeClient from './homeClient'

const numberOfImages = 5;
const numberOfArtists = 5;

export const metadata = {
    title: 'Home page',
    description: 'Landing page / Home page for the project',
}

export const revalidate = 86400;

export default async function Home() {
    const key = process.env.API_KEY;
    const baseURL = process.env.BASE_URL;
    
    const topPicksURL =`${baseURL}/collections/${getRandomInt(1,5)}/photos?per_page=${numberOfImages}&client_id=${key}`;
    const topPicks = await getData(topPicksURL,filterSliderData )
  
    const recentURL =`${baseURL}/photos?page=1&per_page=${numberOfImages}&client_id=${key}`;
    const recent = await getData(recentURL, filterSliderData);
  
    const randomName = randFirstName();
    const artistListURL = `${baseURL}/search/users?per_page=${numberOfArtists}&query=${randomName}&client_id=${key}`;

    const artistsListFromCache = await getArtistList(artistListURL,filterArtistListData)
    const artistList =artistsListFromCache;

  return (
    <>
      <main className={styles.main}>
        <HomeClient artistList={artistList} topPicks={topPicks} recent={recent}/>
      </main>
    </>
  )
}
