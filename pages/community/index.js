import React from 'react'
import styles from './community.module.scss'
import jtcImage from '../../public/assets/jtc.jpg'
import utaImage from '../../public/assets/uta.jpg'
import Image from 'next/image'
import Head from 'next/head'
import { joinTheCommunity, unleashTheArtist } from '@/data/communityData'

const Community = () => {
    const imageStyle = {
        borderRadius: '10px',
        objectFit: "cover"
      };
  return (
    <>
      <Head>
        <title>Community</title>
        <meta name="description" content="Page for the community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={styles.communityContainer}>
        <div className={styles.jtc}>
            <div  className={`${styles.info} ${styles.jtcText}`}>
                <h1  className={styles.infoHeader}>Join The Community</h1>
                <p  className={styles.infoText}>{joinTheCommunity}</p>
            </div>
            <figure className={`${styles.jtcImage} ${styles.imageArea}`}>
                <Image  
                    src={jtcImage}
                    style={imageStyle}
                    fill
                    alt="Join The Community Image"
                    />
            </figure>
        </div>

        <div className={styles.uta}>
            <figure className={`${styles.utaImage} ${styles.imageArea}`}>
                <Image  
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

export default Community