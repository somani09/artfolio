'use client';
import React, { useEffect, useState } from 'react'
import SlickCarousel from '@/components/commons/carousel/slickCarousel.js'
import ImageSlider from '@/components/commons/imageSlider/imageSlider.js'
import styles from './home.module.scss'
import Errors from '@/components/errors/errors';
import { getRandomInt } from '@/utils/getRandomInt';

const HomeClient = ({artistList, topPicks, recent}) => {
  // const [sliceStart, setSliceStart] = useState(0);
  // useEffect(() => {
  //   setSliceStart(getRandomInt(0,23))   
  // }, [])

  let sliceStart = getRandomInt(0,23)

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
      setHydrated(true);
  }, []);

  if (!hydrated) {
      // Returns null on first render, so the client and server match
      return null;
  }
  
  return (
    <div className={styles.home}>
        <section className={styles.carousel}>
        <h1 className={`${styles.artist} ${styles.sectionHeading}`}>Artists</h1>
        <div className={styles.carouselContainer}>
            {artistList.status!=null && artistList.status==200?<SlickCarousel data={artistList.data.slice(sliceStart,sliceStart+10)} />:<Errors />}
            
        </div>
        </section>
        <section className={styles.topPicks}>
        <h1 className={styles.sectionHeading}>Top Picks</h1>
        {topPicks.status!=null && topPicks.status==200?<ImageSlider data={topPicks.data} /> :<Errors />}
        </section>
        <section className={styles.recent}>
        <h1 className={styles.sectionHeading}>Recent Uploads</h1>
        {recent.status!=null && recent.status==200?<ImageSlider data={recent.data} />  :<Errors />}
        </section>
    </div>
  )
}

export default HomeClient