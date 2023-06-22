import React from 'react'
import ArtistCard from '../../components/artist/artistCard';
import styles from './artists.module.scss'
import {artistData} from '../../data/artistsData'
const Artists = () => {
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

export default Artists