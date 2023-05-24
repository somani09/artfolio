import React from 'react'
import styles from './imageSlider.module.scss'
import ImageBox from './imageBox'

const ImageSlider = ({data,type}) => {
  
    
  return (
   <div className={`${styles.imageSlider} ${type==='vertical'?styles.vertical:styles.horizontal}` } >
      {data.map((image) => (
        <ImageBox data={image} type={type} />
      ))}
   </div>
  )
}

export default ImageSlider