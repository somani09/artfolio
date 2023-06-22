import React, { useState } from 'react'
import styles from './artist.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const ArtistCard = ({data}) => {
  const imageStyle = {
    borderRadius: '10px',
    objectFit: "cover"
  };
  return (
    <div className={`${styles.individualArtistCard}`}>
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

export default ArtistCard