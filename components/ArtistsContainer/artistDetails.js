import React from 'react'
import styles from './artists.module.scss'
import { useRouter } from 'next/router';
import ImageSlider from '../commons/imageSlider/imageSlider';

const ArtistDetails = () => {
    const router = useRouter();
    console.log("inside route number - ", router.query.artistName);
    var artistDetails = ["image1","image2","image3","image4","image5","image6","image7","image8"]
    var type = 'vertical'
    return (
        // `row w100 space-between`
    <div className={styles.artistDetails}>
        <div className={styles.artistInfoArea}>

            <div className={styles.artistImageContact}>
                <div className={styles.artistImage}>
                    artist Image
                </div>
                <div className={styles.contacts}>
                    Artist Contacts
                </div>
            </div>

            <div className={styles.details}>detials</div>
        </div>
        <div className={styles.imagesArea}>
            <div className={`${styles.showCase} ${styles.sectionHeading}`}>ShowCase</div>
            <ImageSlider data={artistDetails} type={'vertical'}/>
        </div>
    </div>
  )
}

export default ArtistDetails