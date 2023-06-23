import React from 'react'
import styles from './tapedPaper.module.scss'
const TapedPaper = ({children}) => {
  return (
    <div className={`${styles.paper} ${styles.pink}`}>
        <div  className={styles.tape_section2}></div>
        {children}
    </div>
  )
}

export default TapedPaper