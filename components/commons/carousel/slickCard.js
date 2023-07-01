import React from 'react'
import styles from './slickCarousel.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { unsplashLoader } from '@/utils/unsplashLoader'
import { imageQuality } from '@/utils/customVariables'
const SlickCard = ({data}) => {
  const imageStyle = {
    borderRadius: '10px',
    objectFit: "cover"
  };
  const link = `/artists/${data.username}`;
  return (
    <figure id={data.id} className={`${styles.card}`}>
      <Link  href={link} className={styles.link}>
        <Image 
          loader={unsplashLoader} 
          src={data.profile_image}
          style={imageStyle}
          fill
          quality={imageQuality}
          alt={`${data.name} Profile Picture`}
        />
      </Link>
      <div className={styles.artistNameArea}>
        <div className={styles.artistName} >{data.name}</div>  
      </div>  
    </figure>
  )
}

export default SlickCard