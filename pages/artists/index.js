import React from 'react'
import ArtistCard from '../../components/artist/artistCard';
import styles from './artists.module.scss'
import {artistData} from '../../data/artistsData'
import { generateRandomWord } from '@/utils/generateRandomWord';
import { filterArtistListData } from '@/utils/filterData';
import { getData } from '@/services/getData';
import Error404 from '@/components/errors/error404';
import Head from 'next/head';
import { faker } from '@faker-js/faker';
import {lastTimeStampData, artistListData} from '../../store/artistList/artistListSlice'
import { storeWrapper } from '@/store/store'

const numberOfArtists = 5;

export const getStaticProps =  storeWrapper.getStaticProps(store => async()=>{
  const date = new Date();
  const key = process.env.API_KEY;
  const baseURL = process.env.BASE_URL;

  const randomName = faker.person.middleName();
  const artistListURL = `${baseURL}/search/users?per_page=${numberOfArtists}&query=${randomName}&client_id=${key}`;
  let artistList = null

  const lastTimeStamp  = store.getState().artistListReducer.lastTimeStamp
    
  if(lastTimeStamp==null || ( date.getTime() - lastTimeStamp > 86400000)){
    artistList = await getData(artistListURL, filterArtistListData );
    store.dispatch(artistListData(artistList));
    store.dispatch(lastTimeStampData(date.getTime() ))
  }
  else{
    artistList = store.getState().artistListReducer.artistList;
  }


  return {
    props: {
      artistList: artistList,
    },
    revalidate: 86400,
  };
}
)

const Artists = ({artistList}) => {
  return (
    <>
      <Head>
        <title>Artists</title>
        <meta name="description" content="Artist Page - displays all the Artists on the platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {artistList.status==200?
      <section  id="artists" className={styles.artistContainer}>
        <h1 className={styles.sectionHeading}>Artists</h1>
        <div className={styles.artistsCardArea}>
          {
            artistList.data.map(artist => (
                <ArtistCard key={artist.id} data={artist}/>
            ))
          }
        </div>
      
      </section>:<Error404 />}
    </>
    
  )
}

export default Artists