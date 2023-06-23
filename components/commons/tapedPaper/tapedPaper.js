import React from 'react'
import styles from './tapedPaper.module.scss'
const TapedPaper = ({children}) => {
  return (
    <div class={`${styles.paper} ${styles.pink}`}>
        <div  class={styles.tape_section2}></div>
        {children}
    </div>
  )
}

export default TapedPaper