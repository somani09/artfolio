'use client';
import React, { useEffect, useState } from 'react'
import SlickCarousel from '@/components/commons/carousel/slickCarousel.js'
import ImageSlider from '@/components/commons/imageSlider/imageSlider.js'
import styles from './home.module.scss'
import { getRandomInt } from '@/utils/getRandomInt';
import ErrorComponent from '@/components/errors/errorComponent';

const HomeClient = ({artistList, topPicks, recent}) => {
  // const [sliceStart, setSliceStart] = useState(0);
  // useEffect(() => {
  //   setSliceStart(getRandomInt(0,23))   
  // }, [])

  let sliceStart = getRandomInt(0,artistList.data.length-10)

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
          {artistList==undefined||artistList==null || artistList.data==null || artistList.status!=200?<ErrorComponent code={artistList.status} />
          :<SlickCarousel data={artistList.data.slice(sliceStart,sliceStart+10)} />}       
        </div>
        </section>
        <section className={styles.topPicks}>
          <h1 className={styles.sectionHeading}>Top Picks</h1>
          {topPicks==undefined||topPicks==null || topPicks.data==null || topPicks.status!=200?<ErrorComponent code={topPicks.status} />
          :<ImageSlider data={topPicks.data} />}
        </section>
        <section className={styles.recent}>
          <h1 className={styles.sectionHeading}>Recent Uploads</h1>
          {recent==undefined||recent==null || recent.data==null || recent.status!=200?<ErrorComponent code={recent.status} />
          :<ImageSlider data={recent.data} />  }
        </section>
    </div>
  )
}

export default HomeClient