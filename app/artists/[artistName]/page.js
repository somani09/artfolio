import React from 'react'
import { filterSliderData, filterUserData } from '@/utils/filterData';
import { getData } from '@/services/getData';
import Error404 from '@/components/errors/error404';
import ArtistNameClient from './artistNameClient';
import { useParams } from 'next/navigation';
import { fetchPathList } from '@/cache/artistList/artistListPreCache';
import ErrorOutOfCalls from '@/components/errors/errorOutOfCalls';
const imageUrl = "/assets/previewImage.jpg"

const photosPerPage = 10

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

export const dynamicParams = true;
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
        {
          user!=null && user.status==404?<Error404 context={"artist"}/>
          :user!=null && user.status==500?<ErrorOutOfCalls />
          :user!=null && user.status==200?<ArtistNameClient user={user} photos={photos} />:<div>Wow ok that was not expected at all.</div>
        
        }
        </>
  )
}

export default Artist