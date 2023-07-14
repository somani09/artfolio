'use client';
import React, { useEffect, useState } from 'react'
import styles from './artist.module.scss'
import ImageSlider from '@/components/commons/imageSlider/imageSlider';
import Image from 'next/image';
// import {RiUnsplashFill} from 'react-icons/ri/uns'
import {RiUnsplashFill} from '@react-icons/all-files/ri/RiUnsplashFill'
import {RiInstagramLine} from '@react-icons/all-files/ri/RiInstagramLine'
import {CgWebsite} from '@react-icons/all-files/cg/CgWebsite'
import {AiOutlineTwitter} from '@react-icons/all-files/ai/AiOutlineTwitter'
import { getRandomInt } from '@/utils/getRandomInt';
import { unsplashLoader } from '@/utils/unsplashLoader';
import { randJobTitle, randQuote, randCatchPhrase, randMusicGenre} from '@ngneat/falso';
import { imageQuality } from '@/utils/customVariables';
import { getData } from '@/services/getData';
import ErrorOutOfCalls from '@/components/errors/errorOutOfCalls';
import Error404 from '@/components/errors/error404';
import { filterSliderData, filterUserData } from '@/utils/filterData';
import Loader from '@/components/loader/loader';
import ErrorComponent from '@/components/errors/errorComponent';

const photosPerPage = 20;
let counter = 0;

const ArtistNameClient = ({user, photos, params, baseURL}) => {
    function checkDataEmpty (){
        return  user==undefined
                ||user==null
                ||user.data==null
                ||photos==undefined
                ||photos==null
                ||photos.data==null
    }
    
    const key = process.env.NEXT_PUBLIC_KEY
    const [hydrated, setHydrated] = 
        useState(checkDataEmpty() ? true:false);
    const [loading, setLoading] = 
        useState(()=>checkDataEmpty()?true:false);
    const [userData, setUserData] = useState(user);
    const [photosData, setPhotosData] = useState(photos);
    
    useEffect(() => {
        if(checkDataEmpty()){
            const getDataOnClient = async ()=>{  
                try{
                    if(userData==undefined||userData==null||userData.data==null){
                        const userURL = `/api/proxy?target=${encodeURIComponent(
                            `/users/${params.artistName}?client_id=s`
                            )}`;
                        let userDataClient = await getData(userURL, filterUserData);
                        if(userDataClient.data==null)
                            throw new Error(userDataClient.status);
                        setUserData(userDataClient);
                    }
                    if(photosData==undefined||photosData==null||photosData.data==null){
                        const photosURL = `/api/proxy?target=${encodeURIComponent(
                            `/users/${params.artistName}/photos?per_page=${photosPerPage}&client_id=`
                            )}`;
                        let photosDataClient = await getData(photosURL, filterSliderData);
                        if(photosDataClient.data==null)
                            throw new Error(photosDataClient.status);
                        setPhotosData(photosDataClient);  
                    }
                }
                catch(error){
                    setLoading(false);
                }
                
                setLoading(false);
            }
            getDataOnClient();
        }
        setHydrated(true);

        return ()=>{
            return;
        }
    }, []);
    
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    var type = 'vertical'
    const imageStyle = {
        borderRadius: '10px',
        objectFit: "cover"
    };


    const getFakeBio = ()=>{
        const fakeBio = randQuote() + " | " + randCatchPhrase()  + " | " + randJobTitle() + " | " + "(NOTE: Data created using Falso API to populate this area. Real person on unsplash is not accountable for this random information.)"
        return fakeBio;
    }
    const getStyles = ()=>{
        let something="";
        let count=getRandomInt(1,6);
        for(let i=1; i<=count; i++)
            something+=randMusicGenre ()+" | "

        return something + "(made using Falso API)"
    }
    
    return (
        loading?<Loader />:
        userData.data==undefined||userData.data==null || photosData.data==undefined || photosData.data==null?<ErrorComponent />:
        userData.status!=200 || photosData.status!=200?<ErrorComponent code={userData.status} />:
        <section className={styles.artistDetails}>
            <div className={styles.artistInfoArea}>
    
                <div className={styles.artistImageContact}>
                    <figure className={styles.artistImage}>
                        <Image  
                            loader={unsplashLoader} 
                            src={userData.data.profile_image} 
                            style={imageStyle}
                            fill
                            quality={imageQuality}
                            alt={`${userData.data.name} Profile Picture`}
                            />
                    </figure>
                    
                </div>
                <div className={styles.detailsContact}>
                    <div className={styles.details}>
                        <p className={`${styles.detailsInfo} ${styles.artistName}`} >
                            {/* <span className={styles.detailsHeading}>Name : </span> */}
                            {userData.data.name}
                        </p>
                        <p className={styles.detailsInfo}>
                            <span className={styles.detailsHeading}>About : </span>{userData.data.bio||getFakeBio()}</p>
                        <p className={styles.detailsInfo}>
                            <span className={styles.detailsHeading}>Art Styles  : </span>{getStyles()}
                        </p>
                    </div>
                    <div className={styles.contacts}>
                            <h1 className={styles.contactHeading}>Connect With the Artist</h1>   
                            <div className={styles.contactIcons}>
                                <a href={userData.data.unsplash_page} target="_blank"> <RiUnsplashFill className={styles.icons} /></a>
                                {userData.data.instagram_username && 
                                <a href={`https://www.instagram.com/${userData.data.instagram_username}`} target="_blank">
                                    <RiInstagramLine className={styles.icons}/>
                                </a>}
                                {userData.data.twitter_username && 
                                <a href={`https://twitter.com/${userData.data.twitter_username}`} target="_blank">
                                    <AiOutlineTwitter className={styles.icons}/>
                                </a>}
                                {userData.data.portfolio_url && 
                                <a href={userData.data.portfolio_url} target="_blank"> 
                                    <CgWebsite className={styles.icons} />
                                </a>

                                }
                                
                            </div>
                    </div>  
                </div>
               
            </div>
            <div className={styles.imagesArea}>
                <h1 className={`${styles.showCase} ${styles.sectionHeading}`}>ShowCase</h1>
                <ImageSlider data={photosData.data} type={'vertical'} from={'showCase'}/>
            </div>
        </section>
  )
}

export default ArtistNameClient