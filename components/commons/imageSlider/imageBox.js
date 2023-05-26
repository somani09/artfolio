import React from 'react'
import styles from './imageSlider.module.scss'
import Image from 'next/image'
const ImageBox = ({data,type}) => {
  return (
    <div className={`${styles.imageBox} ${type==='vertical'?styles.inVertical:''}`}>
      <Image  
          className={styles.image}
          src={data.image} 
          />
    </div>
  )
}

export default ImageBox