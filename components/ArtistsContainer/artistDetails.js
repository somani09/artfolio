import React from 'react'
import styles from './artists.module.scss'
import { useRouter } from 'next/router';
import ImageSlider from '../commons/imageSlider/imageSlider';
import {individualArtistData} from '../../data/individualArtistData'
import {recentData} from '../../data/recentData'
import Image from 'next/image';
import {RiUnsplashFill} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
import {SiGmail} from 'react-icons/si'
import {RiFacebookBoxLine} from 'react-icons/ri'


const ArtistDetails = () => {
    const router = useRouter();
    console.log("inside route number - ", router.query.artistName);
    var artistDetails = ["image1","image2","image3","image4","image5","image6","image7","image8"]
    var type = 'vertical'
    const imageStyle = {
        borderRadius: '10px',
        objectFit: "cover"
      };
    return (
        // `row w100 space-between`
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
                        <span className={styles.detailsHeading}>Name : </span>{individualArtistData.name}
                    </div>
                    <div className={styles.detailsInfo}>
                        <span className={styles.detailsHeading}>Age : </span>{individualArtistData.age}
                    </div>
                    <div className={styles.detailsInfo}>
                        <span className={styles.detailsHeading}>About : </span>{individualArtistData.about}</div>
                    <div className={styles.detailsInfo}>
                        <span className={styles.detailsHeading}>Art Styles  : </span>{individualArtistData.styles}
                    </div>
                </div>
                <div className={styles.contacts}>
                        <div className={styles.contactHeading}>Connect With the Artist</div>   
                        <div className={styles.contactIcons}>
                            <RiUnsplashFill className={styles.icons} />
                            <RiInstagramLine className={styles.icons}/>
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

export default ArtistDetails