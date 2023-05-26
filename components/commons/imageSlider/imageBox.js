import React from 'react'
import styles from './imageSlider.module.scss'
import Image from 'next/image'
const ImageBox = ({data,type}) => {
  const imageStyle = {
    borderRadius: '10px',
    objectFit: "cover"
  };
  return (
    <div className={`${styles.imageBox} ${type==='vertical'?styles.inVertical:''}`}>
      <Image  
          fill
          src={data.image} 
          style={imageStyle}
          />
    </div>
  )
}

export default ImageBox