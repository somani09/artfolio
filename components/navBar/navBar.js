import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import styles from './navBar.module.scss'
const NavBar = () => {

  const router = useRouter();
  const isArtist = router.pathname.startsWith('/artist');
  return (
    <div className={styles.navbarContainer}>

        <div className={styles.logo}>Gallery</div>  

        <div className={styles.pageLinks}>
          <Link href="/">
              <div className={`${styles.link} ${router.pathname == "/" ? styles.active : ""}`}>Home</div>
          </Link>

          <Link href="/artists">
              <div className={`${styles.link} ${isArtist ? styles.active : ""}`}>Artists</div>
          </Link>

          <Link href="/about">
              <div className={`${styles.link} ${router.pathname == "/about" ? styles.active : ""}`}>About</div>
          </Link>

          <Link href="/community">
              <div className={`${styles.link} ${router.pathname == "/community" ? styles.active : ""}`}>Community</div>
          </Link>
          
        </div>

        <div className={styles.login} >login details</div>
    
    </div>
  )
}

export default NavBar