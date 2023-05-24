import Link from 'next/link';
import React from 'react'
import ArtistCard from './artistCard';
import styles from './artists.module.scss'

const ArtistsContainer = () => {

  const dummyArray = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className={styles.artistContainer}>
        {
          dummyArray.map(artist => (
            <Link className={styles.individualArtistCard} href={`/artists/${artist}`}>
              <div ><ArtistCard/></div>
            </Link>
          ))
        }
    </div>
  )
}

export default ArtistsContainer
