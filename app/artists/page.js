import React from 'react'
import { filterArtistListData } from '@/utils/filterData';
import Error404 from '@/components/errors/error404';
import { randFirstName } from '@ngneat/falso';
import getArtistList from '@/cache/artistList/artistListPreCache';
import ArtistClient from './artistClient';
const imageUrl = "/assets/previewImage.png"

export const metadata = {
  title: 'Artists',
  description: 'Step into the world of artistic brilliance at the Gallery\'s Artist Page: Unveil the extraordinary works of talented artists who inspire and captivate.',
  openGraph: {
    type:'website',
    url:'https://gallery-eight-kappa.vercel.app/',
    title: 'Artists',
    description: 'Step into the world of artistic brilliance at the Gallery\'s Artist Page: Unveil the extraordinary works of talented artists who inspire and captivate.',
    images:[{
      url: imageUrl,
    }] ,
    siteName:'Gallery by Somani'
  },
  twitter: {
    title: 'Artists',
    description: 'Step into the world of artistic brilliance at the Gallery\'s Artist Page: Unveil the extraordinary works of talented artists who inspire and captivate.',
    images: [imageUrl]
  }
}

// export const revalidate = 86400;
export const revalidate = 3600 * 4;


const numberOfArtists = 5;

const Artists = async () => {
  const key = process.env.API_KEY;
  const baseURL = process.env.BASE_URL;

  const randomName = randFirstName();
  const artistListURL = `${baseURL}/search/users?per_page=${numberOfArtists}&query=${randomName}&client_id=${key}`;

  const artistList = await getArtistList()

  return (
    <>
      {artistList.status!=null && artistList.status==200?<ArtistClient artistList={artistList} />
     :<Error404 />}
    </>
    
  )
}

export default Artists