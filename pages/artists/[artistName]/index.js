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
        user.status==200?
    <div className={styles.artistDetails}>
        <div className={styles.artistInfoArea}>

            <div className={styles.artistImageContact}>
                <div className={styles.artistImage}>
                    <Image  
                        src={individualArtistData.image} 
                        style={imageStyle}
                        fill
                        />
                </div>
                
            </div>
            <div className={styles.detailsContact}>
                <div className={styles.details}>
                    <div className={styles.detailsInfo}>
                        <span className={styles.detailsHeading}>Name : </span>{user.data.name}
                    </div>
                    {/* <div className={styles.detailsInfo}>
                        <span className={styles.detailsHeading}>Age : </span>{individualArtistData.age}
                    </div> */}
                    <div className={styles.detailsInfo}>
                        <span className={styles.detailsHeading}>About : </span>{user.data.bio}</div>
                    <div className={styles.detailsInfo}>
                        <span className={styles.detailsHeading}>Art Styles  : </span>{individualArtistData.styles}
                    </div>
                </div>
                <div className={styles.contacts}>
                        <div className={styles.contactHeading}>Connect With the Artist</div>   
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
            <div className={`${styles.showCase} ${styles.sectionHeading}`}>ShowCase</div>
            <ImageSlider data={photos.data} type={'vertical'} from={'showCase'}/>
        </div>
    </div>:<Error404/>
  )
}

export default Artist