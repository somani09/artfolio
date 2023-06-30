'use client';
import React from 'react'
import styles from './artists.module.scss'
import ArtistCard from '../../components/artist/artistCard';

const ArtistClient = ({artistList}) => {
  return (
    <section  id="artists" className={styles.artistContainer}>
        <h1 className={styles.sectionHeading}>Artists</h1>
        <div className={styles.artistsCardArea}>
          {
            artistList.data.map(artist => (
                <ArtistCard key={artist.id} data={artist}/>
            ))
          }
        </div>
      
      </section>
  )
}

export default ArtistClient