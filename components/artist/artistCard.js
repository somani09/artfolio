import React, { useState } from 'react'
import styles from './artist.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const ArtistCard = ({data}) => {
  const imageStyle = {
    borderRadius: '10px',
    objectFit: "cover"
  };
  const link = `/artists/${data.username}`;
  return (
    <div className={`${styles.individualArtistCard}`}>
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

export default ArtistCard