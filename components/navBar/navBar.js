import React from 'react'
import styles from './navBar.module.scss'
const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>

        <div className={styles.logo}>logo</div>  

        <div className={styles.pageLinks}>
          <div>Home</div>
          <div>Artists</div>
          <div>About</div>
          <div>Community</div>
        </div>

        <div className={styles.login} >login details</div>
    
    </div>
  )
}

export default NavBar