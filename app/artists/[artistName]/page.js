import React from 'react'
import { filterSliderData, filterUserData } from '@/utils/filterData';
import { getData } from '@/services/getData';
import ArtistNameClient from './artistNameClient';
import { fetchPathList } from '@/cache/artistList/artistListPreCache';
const imageUrl = "/assets/previewImage.jpg"

const photosPerPage = 10
export const revalidate = 3600 * 4;

export const metadata = {
    title:"Artists",
    description: "Step into the world of artistic brilliance at the Gallery's Artist Page: Unveil the extraordinary works of talented artists who inspire and captivate.",
    openGraph: {
      type:'website',
      url:'https://gallery-eight-kappa.vercel.app/',
       title:"Artists",
      description: "Step into the world of artistic brilliance at the Gallery's Artist Page: Unveil the extraordinary works of talented artists who inspire and captivate.",
      images:[{
        url: imageUrl,
      }] ,
      siteName:'Gallery by Somani'
    },
    twitter: {
       title:"Artists",
      description: "Step into the world of artistic brilliance at the Gallery's Artist Page: Unveil the extraordinary works of talented artists who inspire and captivate.",
      images: [imageUrl]
    }

  }

// export const dynamicParams = true;
export async function generateStaticParams() {
    return fetchPathList()
  }

const Artist = async (context) => {
    const {params} = context;
    const key = process.env.API_KEY;
    const baseURL = process.env.BASE_URL;
    const userURL = `${baseURL}/users/${params.artistName}?client_id=${key}`;
    const user = await getData(userURL, filterUserData);
    const photosURL = `${baseURL}/users/${params.artistName}/photos?per_page=${photosPerPage}&client_id=${key}`
    const photos = await getData(photosURL, filterSliderData);
    return (
        <>
          <ArtistNameClient user={user} photos={photos} params={params}  baseURL={baseURL} />
        </>
  )
}

export default Artist