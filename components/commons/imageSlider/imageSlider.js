import React from 'react'
import styles from './imageSlider.module.scss'
import ImageBox from './imageBox'

const ImageSlider = ({data,type,from}) => {
  
    
  return (
   <div className={`${styles.imageSlider} ${type==='vertical'?styles.vertical:styles.horizontal}` } >
      {data.map((imageData) => (
        <ImageBox key={imageData.id} data={imageData} type={type} from={from} />
      ))}
   </div>
  )
}

export default ImageSlider