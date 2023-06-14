import React from 'react'
import styles from './slickCarousel.module.scss'
import Image from 'next/image'
import Link from 'next/link'
const SlickCard = ({data}) => {
  const imageStyle = {
    borderRadius: '10px',
    objectFit: "cover"
  };
  return (
    <div className={`${styles.card}`}>
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

export default SlickCard