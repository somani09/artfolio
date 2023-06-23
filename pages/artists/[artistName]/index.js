import React from 'react'
import styles from './artist.module.scss'
import { useRouter } from 'next/router';
import ImageSlider from '@/components/commons/imageSlider/imageSlider';
import { individualArtistData } from '@/data/individualArtistData';
import {recentData} from '../../../data/recentData'
import Image from 'next/image';
import {RiUnsplashFill} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
import {SiGmail} from 'react-icons/si'
import {RiFacebookBoxLine} from 'react-icons/ri'
import { filterSliderData, filterUserData } from '@/utils/filterData';
import { getData } from '@/services/getData';
import Error404 from '@/components/errors/error404';
import Head from 'next/head';

const photosPerPage = 10

export async function getServerSideProps(context){
    const {params} = context;
    const key = process.env.API_KEY;
    const baseURL = process.env.BASE_URL;
    const userURL = `${baseURL}/users/${params.artistName}?client_id=${key}`;
    const user = await getData(userURL, filterUserData);
    const photosURL = `${baseURL}/users/${params.artistName}/photos?per_page=${photosPerPage}&client_id=${key}`
    const photos = await getData(photosURL, filterSliderData);


    
    return {
        props: {
            user:  user,
            photos: photos

        },
        //revalidate: 60, // Revalidate and regenerate the page every 60 seconds
      };

}

const Artist = ({user, photos}) => {
    const router = useRouter();
    var type = 'vertical'
    const imageStyle = {
        borderRadius: '10px',
        objectFit: "cover"
      };
    return (
        <>
        <Head>
            <title>{user.data.name}</title>
            <meta name="description" content="Artist Page - displays information about an artist" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {
        user.status==200?
        <section className={styles.artistDetails}>
            <div className={styles.artistInfoArea}>
    
                <div className={styles.artistImageContact}>
                    <figure className={styles.artistImage}>
                        <Image  
                            src={individualArtistData.image} 
                            style={imageStyle}
                            fill
                            alt={`${user.data.name} Profile Picture`}
                            />
                    </figure>
                    
                </div>
                <div className={styles.detailsContact}>
                    <div className={styles.details}>
                        <p className={styles.detailsInfo}>
                            <span className={styles.detailsHeading}>Name : </span>{user.data.name}
                        </p>
                        {/* <div className={styles.detailsInfo}>
                            <span className={styles.detailsHeading}>Age : </span>{individualArtistData.age}
                        </div> */}
                        <p className={styles.detailsInfo}>
                            <span className={styles.detailsHeading}>About : </span>{user.data.bio}</p>
                        <p className={styles.detailsInfo}>
                            <span className={styles.detailsHeading}>Art Styles  : </span>{individualArtistData.styles}
                        </p>
                    </div>
                    <div className={styles.contacts}>
                            <h1 className={styles.contactHeading}>Connect With the Artist</h1>   
                            <div className={styles.contactIcons}>
                                <a href={user.data.unsplash_page} target="_blank"> <RiUnsplashFill className={styles.icons} /></a>
                                <a href={user.data.instagram_username?`https://www.instagram.com/${user.data.instagram_username}`:null} target="_blank"><RiInstagramLine className={styles.icons}/></a>
                                <SiGmail className={styles.icons}/>
                                <RiFacebookBoxLine className={styles.icons}/>
                            </div>
                    </div>  
                </div>
               
            </div>
            <div className={styles.imagesArea}>
                <h1 className={`${styles.showCase} ${styles.sectionHeading}`}>ShowCase</h1>
                <ImageSlider data={photos.data} type={'vertical'} from={'showCase'}/>
            </div>
        </section>:<Error404/>
        }
        </>
        

  )
}

export default Artist