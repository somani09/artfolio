import React from 'react'
import ImageSlider from '../commons/imageSlider'
import styles from './home.module.scss'


const Home = () => {

  var topPickData = ["image1","image2","image3","image4","image5","image6","image7","image8"]

  return (
    <div className={styles.home}>
      <div className={styles.carousel}>carousel</div>
      <div className={styles.topPicks}><ImageSlider data={topPickData} /></div>
      <div className={styles.recent}>recent</div>
    </div>
  )
}

export default Home