'use client';
import React from 'react'
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

const ArtistNameClient = ({user, photos}) => {

    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
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
    <section className={styles.artistDetails}>
            <div className={styles.artistInfoArea}>
    
                <div className={styles.artistImageContact}>
                    <figure className={styles.artistImage}>
                        <Image  
                            loader={unsplashLoader} 
                            src={user.data.profile_image} 
                            style={imageStyle}
                            fill
                            quality={75}
                            alt={`${user.data.name} Profile Picture`}
                            />
                    </figure>
                    
                </div>
                <div className={styles.detailsContact}>
                    <div className={styles.details}>
                        <p className={styles.detailsInfo}>
                            <span className={styles.detailsHeading}>Name : </span>{user.data.name}
                        </p>
                        <p className={styles.detailsInfo}>
                            <span className={styles.detailsHeading}>About : </span>{user.data.bio||getFakeBio()}</p>
                        <p className={styles.detailsInfo}>
                            <span className={styles.detailsHeading}>Art Styles  : </span>{getStyles()}
                        </p>
                    </div>
                    <div className={styles.contacts}>
                            <h1 className={styles.contactHeading}>Connect With the Artist</h1>   
                            <div className={styles.contactIcons}>
                                <a href={user.data.unsplash_page} target="_blank"> <RiUnsplashFill className={styles.icons} /></a>
                                {user.data.instagram_username && 
                                <a href={`https://www.instagram.com/${user.data.instagram_username}`} target="_blank">
                                    <RiInstagramLine className={styles.icons}/>
                                </a>}
                                {user.data.twitter_username && 
                                <a href={`https://twitter.com/${user.data.twitter_username}`} target="_blank">
                                    <AiOutlineTwitter className={styles.icons}/>
                                </a>}
                                {user.data.portfolio_url && 
                                <a href={user.data.portfolio_url} target="_blank"> 
                                    <CgWebsite className={styles.icons} />
                                </a>

                                }
                                
                            </div>
                    </div>  
                </div>
               
            </div>
            <div className={styles.imagesArea}>
                <h1 className={`${styles.showCase} ${styles.sectionHeading}`}>ShowCase</h1>
                <ImageSlider data={photos.data} type={'vertical'} from={'showCase'}/>
            </div>
        </section>
  )
}

export default ArtistNameClient