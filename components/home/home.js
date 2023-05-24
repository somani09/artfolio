import React from 'react'
import ImageSlider from '../commons/imageSlider/imageSlider'
import styles from './home.module.scss'
import Carousel from '../commons/carousel/carousel'


const Home = () => {

  var topPickData = ["image1","image2","image3","image4","image5","image6","image7","image8"]
  var recentData = ["image1","image2","image3","image4","image5","image6","image7","image8"]
  var carouselData = [
    {id:1 , image:'image1'},
    {id:2 , image:'image2'},
    {id:3 , image:'image3'},
    {id:4 , image:'image4'},
    {id:5 , image:'image5'},
    {id:6 , image:'image6'},
    {id:7 , image:'image7'},
    {id:8 , image:'image8'},
    {id:9 , image:'image9'},
    {id:10 , image:'image10'},
  ]
  return (
    <div className={styles.home}>
      <div className={styles.carousel}>
        <div className={`${styles.artist} ${styles.sectionHeading}`}>Artists</div>
        <div className={styles.carouselContainer}>
          <Carousel data={carouselData} />
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