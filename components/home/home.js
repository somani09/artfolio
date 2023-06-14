import React from 'react'
import ImageSlider from '../commons/imageSlider/imageSlider'
import styles from './home.module.scss'
import Carousel from '../commons/carousel/carousel'
import {artistData} from '../../data/artistsData'
import {topPickData} from '../../data/topPicksData'
import {recentData} from '../../data/recentData'
import SlickCarousel from '../commons/carousel/slickCarousel'
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.carousel}>
        <div className={`${styles.artist} ${styles.sectionHeading}`}>Artists</div>
        <div className={styles.carouselContainer}>
          <SlickCarousel data={artistData} />
        </div>
      </div>
      <div className={styles.topPicks}>
        <div className={styles.sectionHeading}>Top Picks</div>
        <ImageSlider data={topPickData} />  
      </div>
      <div className={styles.recent}>
        <div className={styles.sectionHeading}>Recent Uploads</div>
        <ImageSlider data={recentData} />  
      </div>
    </div>
  )
}

export default Home