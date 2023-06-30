'use client';
import React from 'react'
import styles from './community.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import { joinTheCommunity, unleashTheArtist } from '@/data/communityData'
import { unsplashLoader } from '@/utils/unsplashLoader'

const CommunityClient = () => {
    const imageStyle = {
        borderRadius: '10px',
        objectFit: "cover"
    };
    
    const openImage = (picLink)=>{
      window.open(picLink, "_blank")
    }
  
    
    const jtcImage = "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2"
    const jtcLink = "https://unsplash.com/photos/UCNaGWn4EfU"
    // const jtcImage =  "https://images.unsplash.com/photo-1545518514-ce8448f542b3?"
    // const jtcLink = "https://unsplash.com/photos/LtkVWpOPK9w"
    const utaImage = "https://images.unsplash.com/photo-1529066792305-5e4efa40fde9?"
    const utaLink = "https://unsplash.com/photos/0rlfiRSdVzU"
  return (
    <>
      <section className={styles.communityContainer}>
        <div className={styles.jtc}>
            <div  className={`${styles.info} ${styles.jtcText}`}>
                <h1  className={styles.infoHeader}>Join The Community</h1>
                <p  className={styles.infoText}>{joinTheCommunity}</p>
            </div>
            <figure onClick={()=>openImage(jtcLink)} className={`${styles.jtcImage} ${styles.imageArea}`}>
                <Image  
                    loader={unsplashLoader}
                    quality={75} 
                    src={jtcImage}
                    style={imageStyle}
                    fill
                    alt="Join The Community Image"
                    />
            </figure>
        </div>

        <div className={styles.uta}>
            <figure onClick={()=>openImage(utaLink)} className={`${styles.utaImage} ${styles.imageArea}`}>
                <Image  
                    loader={unsplashLoader}
                    quality={75} 
                    src={utaImage} 
                    style={imageStyle}
                    fill
                    alt="Unleash The Artist Image"
                    />
            </figure>
            <div className={styles.info}>
                <h1 className={styles.infoHeader}>Unleash The Artist</h1>
                <p className={styles.infoText}>{unleashTheArtist}</p>
            </div>
        </div>
    </section>
    </>

  )
}

export default CommunityClient