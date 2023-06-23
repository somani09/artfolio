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
    <figure className={`${styles.individualArtistCard}`}>
      <Link  href={link} className={styles.link}>
        <Image  
          src={data.image} 
          style={imageStyle}
          fill
          alt={`${data.name} Profile Picture`}
          />
      </Link>
      <div className={styles.artistNameArea}>
        <div className={styles.artistName} >{data.name}</div>  
      </div>  
    </figure>
  )
}

export default ArtistCard