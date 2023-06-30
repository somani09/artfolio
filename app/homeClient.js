'use client';
import React from 'react'
import SlickCarousel from '@/components/commons/carousel/slickCarousel.js'
import ImageSlider from '@/components/commons/imageSlider/imageSlider.js'
import styles from './home.module.scss'

const HomeClient = ({artistList, topPicks, recent}) => {
  return (
    <div className={styles.home}>
        <section className={styles.carousel}>
        <h1 className={`${styles.artist} ${styles.sectionHeading}`}>Artists</h1>
        <div className={styles.carouselContainer}>
            {artistList.status==200?<SlickCarousel data={artistList.data} />:<Errors />}
            
        </div>
        </section>
        <section className={styles.topPicks}>
        <h1 className={styles.sectionHeading}>Top Picks</h1>
        {topPicks.status==200?<ImageSlider data={topPicks.data} /> :<Errors />}
        </section>
        <section className={styles.recent}>
        <h1 className={styles.sectionHeading}>Recent Uploads</h1>
        {recent.status==200?<ImageSlider data={recent.data} />  :<Errors />}
        </section>
    </div>
  )
}

export default HomeClient