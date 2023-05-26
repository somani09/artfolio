import React, { useState } from 'react'
import styles from './artists.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const ArtistCard = ({data}) => {

  return (
    <div className={`${styles.individualArtistCard}`}>
      <Link  href={data.link} className={styles.link}>
        <Image  
          className={styles.image}
          src={data.image} 
          />
      </Link>
      <div className={styles.artistNameArea}>
        <div className={styles.artistName} >{data.artistName}</div>  
      </div>  
    </div>
  )
}

export default ArtistCard