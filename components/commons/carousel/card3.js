import React from 'react'
import styles from './carousel3.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({data,className, style}) => {
  const imageStyle = {
    borderRadius: '10px',
    objectFit: "cover"
  };
  return (
    <div className={`${styles.card} ${className!=null?className:''}`} style={style}>
      <Link  href={data.link} className={styles.link}>
        <Image 
          src={data.image}
          style={imageStyle}
          fill
        />
      </Link>
      <div className={styles.artistNameArea}>
        <div className={styles.artistName} >{data.artistName}</div>  
      </div>  
    </div>
  )
}

export default Card