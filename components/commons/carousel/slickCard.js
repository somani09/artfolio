import React from 'react'
import styles from './slickCarousel.module.scss'
import Image from 'next/image'
import Link from 'next/link'
const SlickCard = ({data}) => {
  const imageStyle = {
    borderRadius: '10px',
    objectFit: "cover"
  };
  const link = `/artists/${data.username}`;
  return (
    <div className={`${styles.card}`}>
      <Link  href={link} className={styles.link}>
        <Image 
          src={data.image}
          style={imageStyle}
          fill
        />
      </Link>
      <div className={styles.artistNameArea}>
        <div className={styles.artistName} >{data.name}</div>  
      </div>  
    </div>
  )
}

export default SlickCard