import React from 'react'
import styles from './imageSlider.module.scss'

const ImageBox = ({data,type}) => {
  return (
    <div className={`${styles.imageBox} ${type==='vertical'?styles.inVertical:''}`}>{data}</div>
  )
}

export default ImageBox