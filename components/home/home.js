import React from 'react'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.carousel}>carousel</div>
      <div className={styles.topPicks}>top picks</div>
      <div className={styles.recent}>recent</div>
    </div>
  )
}

export default Home