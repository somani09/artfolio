import React from 'react'
import styles from './imageSlider.module.scss'
import Image from 'next/image'
import { unsplashLoader } from '@/utils/unsplashLoader';
import { imageQuality } from '@/utils/customVariables';
const ImageBox = ({data,type,from}) => {
  const imageStyle = {
    borderRadius: '10px',
    objectFit: "cover",
    zIndex:9
  };

  const openImage = (picLink)=>{
    window.open(picLink, "_blank")
  }

  const openArtist = (link) =>{
    // console.log("click registered")
    window.open(link, "_blank")

  }

// onClick={()=>openImage(data.picLink)} 
  return (
    <figure onClick={()=>openImage(data.picLink)}  className={`${styles.imageBox} ${type==='vertical'?styles.inVertical:''}`}>
      <Image 
          loader={unsplashLoader} 
          fill
          src={data.rawUrl} 
          style={imageStyle}
          quality={imageQuality}
          alt={data.description || data.alt_description}
        />
     {from!='showCase' && 
      <div onClick={()=>openArtist(data.user.unsplash)} className={styles.artistNameContainer}>
        <p className={styles.artistName}>{data.user.name}</p>
      </div>}
      {from!='showCase' && 
      <div onClick={()=>openArtist(data.user.unsplash)} className={styles.box}>
          <span className={styles.leftBorder}></span>
          <span className={styles.topBorder}></span>
          <span className={styles.bottomBorder}></span>
          <span className={styles.rightBorder}></span>
      </div>}
    </figure>
  )
}

export default ImageBox