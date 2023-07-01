import React from 'react'
import { filterArtistListData } from '@/utils/filterData';
import Error404 from '@/components/errors/error404';
import { randFirstName } from '@ngneat/falso';
import getArtistList from '@/cache/artistList/artistListCache';
import ArtistClient from './artistClient';

export const metadata = {
  title: 'Artists',
  description: 'Artist Page - displays all the Artists on the platform',
}

export const revalidate = 86400;
// export const revalidate = 60000*5;


const numberOfArtists = 5;

const Artists = async () => {
  const key = process.env.API_KEY;
  const baseURL = process.env.BASE_URL;

  const randomName = randFirstName();
  const artistListURL = `${baseURL}/search/users?per_page=${numberOfArtists}&query=${randomName}&client_id=${key}`;

  const artistList = await getArtistList(artistListURL,filterArtistListData)

  return (
    <>
      {artistList.status==200?<ArtistClient artistList={artistList} />
     :<Error404 />}
    </>
    
  )
}

export default Artists