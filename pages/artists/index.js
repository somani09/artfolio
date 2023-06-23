import React from 'react'
import ArtistCard from '../../components/artist/artistCard';
import styles from './artists.module.scss'
import {artistData} from '../../data/artistsData'
import { generateRandomWord } from '@/utils/generateRandomWord';
import { filterArtistListData } from '@/utils/filterData';
import { getData } from '@/services/getData';
import Error404 from '@/components/errors/error404';
import Head from 'next/head';

const numberOfArtists = 5;

export async function getServerSideProps() {

  const key = process.env.API_KEY;
  const baseURL = process.env.BASE_URL;

  const randomName = generateRandomWord();
  const artistListURL = `${baseURL}/search/users?per_page=${numberOfArtists}&query=${randomName}&client_id=${key}`;
  const artistList = await getData(artistListURL, filterArtistListData );


  return {
    props: {
      artistList: artistList,
    },
    //revalidate: 60, // Revalidate and regenerate the page every 60 seconds
  };
}


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