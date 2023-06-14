import React from 'react'
import SlickCard from './slickCard';
import styles from './slickCarousel.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BiChevronsLeft } from 'react-icons/bi'
import { BiChevronsRight } from 'react-icons/bi'
const SlickCarousel = ({data}) => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2500,
    // lazyLoad: true,
    nextArrow: <BiChevronsRight className={`${styles.rightKey} ${styles.key}`} />,
    prevArrow: <BiChevronsLeft  className={`${styles.leftKey} ${styles.key}`} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  const slider = React.useRef(null);

  return (
    <div className={styles.carousel}>
      <BiChevronsLeft  className={`${styles.leftKey} ${styles.key}`} onClick={() => slider?.current?.slickPrev()} />
      <BiChevronsRight className={`${styles.rightKey} ${styles.key}`} onClick={() => slider?.current?.slickNext()}/>
      <Slider ref={slider} {...settings}>
        {data.map((card,i) =>{
          

          return <SlickCard key={i} data={card}  />
    
        })}
      </Slider>
    </div>
  )
}

export default SlickCarousel