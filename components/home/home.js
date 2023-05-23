import React from 'react'
import ImageSlider from '../commons/imageSlider/imageSlider'
import styles from './home.module.scss'


const Home = () => {

  var topPickData = ["image1","image2","image3","image4","image5","image6","image7","image8"]
  var recentData = ["image1","image2","image3","image4","image5","image6","image7","image8"]

  return (
    <div className={styles.home}>
      <div className={styles.carousel}>carousel</div>
      <div className={styles.topPicks}>
        <div>Top Picks</div>
        <ImageSlider data={topPickData} />  
      </div>
      <div className={styles.recent}>
        <div>Recent Uploads</div>
        <ImageSlider data={recentData} />  
      </div>
    </div>
  )
}

export default Home