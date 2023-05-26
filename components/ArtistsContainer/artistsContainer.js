import React from 'react'
import ArtistCard from './artistCard';
import styles from './artists.module.scss'
import {artistData} from '../../data/artistsData'

const ArtistsContainer = () => {

  const dummyArray = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className={styles.artistContainer}>
        <div className={styles.sectionHeading}>Artists</div>
        <div className={styles.artistsCardArea}>
          {
            artistData.map(artist => (
                <ArtistCard data={artist}/>
            ))
          }
        </div>
        
    </div>
  )
}

export default ArtistsContainer
