import React from 'react'
import styles from './imageSlider.module.scss'
import Image from 'next/image'
const ImageBox = ({data,type,from}) => {
  const imageStyle = {
    borderRadius: '10px',
    objectFit: "cover",
    zIndex:9
  };

  const openImage = (picLink)=>{
    window.open(picLink, "_blank")
  }

  return (
    <figure onClick={()=>openImage(data.picLink)} className={`${styles.imageBox} ${type==='vertical'?styles.inVertical:''}`}>
      <Image  
          fill
          src={data.image} 
          style={imageStyle}
          alt={data.description || data.alt_description}
        />
     {from!='showCase' && <div className={styles.artistNameContainer}>
        <div className={styles.artistName}>{data.user.name}</div>
      </div>}
      {from!='showCase' && <div className={styles.box}>
          <span className={styles.leftBorder}></span>
          <span className={styles.topBorder}></span>
          <span className={styles.bottomBorder}></span>
          <span className={styles.rightBorder}></span>
      </div>}
    </figure>
  )
}

export default ImageBox