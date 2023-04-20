import React from 'react'
import styles from './artists.module.scss'

const ArtistDetails = () => {
  return (
    <div className={styles.artistDetails}>
        <div className={`row w100 space-between`}>

            <div className={styles.artistImageContact}>
                <div className={styles.artistImage}>
                    artist Image
                </div>
                <div className={styles.contacts}>
                    Artist Contacts
                </div>
            </div>

            <div className={styles.details}>detials</div>
        </div>
        <div className={styles.imagesArea}>Artist images</div>
    </div>
  )
}

export default ArtistDetails