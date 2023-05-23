import React from 'react'
import styles from './imageSlider.module.scss'

const ImageBox = ({data}) => {
  return (
    <div className={styles.imageBox}>{data}</div>
  )
}

export default ImageBox