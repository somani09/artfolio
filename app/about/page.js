import React from 'react'
import styles from './about.module.scss'
import { aboutPageData } from '@/data/aboutPageData'
import authorImage from '../../assets/author.jpg'
import Image from 'next/image'


export const metadata = {
  title: 'About the Website',
  description: 'Information about the site and the creator of the site.',
}

const About = () => {
  const imageStyle = {
    borderRadius: '100px',
    objectFit: "cover"
  };
  return (
    <>
      <div className={styles.aboutPage}>
          <section className={styles.aboutAuthor}>
            <div className={styles.imageArea}>
              <figure className={styles.authorImage}>
                <Image 
                  src={authorImage}
                  style={imageStyle}
                  fill
                  alt='Website creator&#39;s Image' 
                />
              </figure>
            </div>

            <p className={styles.authorInfo}>
              Hey, I am <span className={styles.authorName}>Vaibhav Somani</span>, Front-end developer and curruntly a masters student at Arizona State University studying Computer Science. 
              Feel free to checkout my <a href="https://somani09.github.io/portfolio/" target='_blank' className={styles.portfolio}>portfolio</a> if you are curious about me -&#62; 
              <a href="https://somani09.github.io/portfolio/" target='_blank' className={styles.portfolio}>somani09.github.io/portfolio/</a>
            </p>
          </section>
          <section className={styles.websiteInfo}>
           <h1 className={styles.aboutWebsiteHeading}>About the Website</h1> 
            {aboutPageData.map(sectionData=>(
              <div className={styles.sectionArea} key={sectionData.id}>
                <h2 className={styles.sectionHeading}>{sectionData.sectionHeading}</h2>
                  {sectionData.subSection.map(subSectionData=>(
                    <div className={styles.subSection}>
                    <h3 className={styles.subSectionHeading}>=&#62;{subSectionData.subHeading}</h3>
                    {
                      subSectionData.points.map(point=>(
                        <p className={styles.point}>
                        - {point.point}
                        </p>
                      ))
                    }
                    </div>
                  ))}
              </div>
            ))}          
          </section>
      </div>
    </>
    
  )
}

export default About