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
import { filterUserData } from '@/utils/filterData';
import axios from 'axios';

export async function getServerSideProps(context){
    const {params} = context;
    const key = process.env.API_KEY;
    const baseURL = process.env.BASE_URL;
    // console.log("Params =", params)
    const userURL = `${baseURL}users/${params.artistName}?client_id=${key}`;
    const userData = await axios.get(userURL)
    const filteredUserData = filterUserData(userData.data);
    console.log("url= ", userURL);
    console.log("data=", filteredUserData)
    return {
        props: {
            userData:  filteredUserData,

        },
        //revalidate: 60, // Revalidate and regenerate the page every 60 seconds
      };

}

// export async function getStaticPaths(){
//     return{
//         paths: [],
//         fallback: true,
//     }
// }

const Artist = ({userData}) => {
    const router = useRouter();
    var type = 'vertical'
    const imageStyle = {
        borderRadius: '10px',
        objectFit: "cover"
      };
    console.log("data in artist=",  userData)
    return (
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
                        <span className={styles.detailsHeading}>Name : </span>{userData.name}
                    </div>
                    {/* <div className={styles.detailsInfo}>
                        <span className={styles.detailsHeading}>Age : </span>{individualArtistData.age}
                    </div> */}
                    <div className={styles.detailsInfo}>
                        <span className={styles.detailsHeading}>About : </span>{userData.bio}</div>
                    <div className={styles.detailsInfo}>
                        <span className={styles.detailsHeading}>Art Styles  : </span>{individualArtistData.styles}
                    </div>
                </div>
                <div className={styles.contacts}>
                        <div className={styles.contactHeading}>Connect With the Artist</div>   
                        <div className={styles.contactIcons}>
                            <a href={userData.unsplash_page} target="_blank"> <RiUnsplashFill className={styles.icons} /></a>
                            <a href={userData.instagram_username?`https://www.instagram.com/${userData.instagram_username}`:null}><RiInstagramLine className={styles.icons}/></a>
                            <SiGmail className={styles.icons}/>
                            <RiFacebookBoxLine className={styles.icons}/>
                        </div>
                </div>  
            </div>
           
        </div>
        <div className={styles.imagesArea}>
            <div className={`${styles.showCase} ${styles.sectionHeading}`}>ShowCase</div>
            <ImageSlider data={recentData} type={'vertical'} from={'showCase'}/>
        </div>
    </div>
  )
}

export default Artist