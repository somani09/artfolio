import React from 'react'
import styles from './imageSlider.module.scss'
import Image from 'next/image'
const ImageBox = ({data,type}) => {
  const imageStyle = {
    borderRadius: '10px',
    objectFit: "cover",
    zIndex:9
  };
  return (
    <div className={`${styles.imageBox} ${type==='vertical'?styles.inVertical:''}`}>
      <Image  
          fill
          src={data.image} 
          style={imageStyle}
        />
      <div className={styles.artistNameContainer}>
        <div className={styles.artistName}>artist Name</div>
      </div>
      <div className={styles.box}>
          <span className={styles.leftBorder}></span>
          <span className={styles.topBorder}></span>
          <span className={styles.bottomBorder}></span>
          <span className={styles.rightBorder}></span>
      </div>
    </div>
  )
}

export default ImageBox