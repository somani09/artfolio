import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styles from './navBar.module.scss'
import SignInUp from '../signInUp/signInUp';
const NavBar = () => {
  let fromSignIn = "signIn";
  let fromSignUp = "signUp";
  const [showSignIn, setShowSignIn] = useState(false);
  const [from, setFrom] = useState(null);
  const router = useRouter();
  const isArtist = router.pathname.startsWith('/artist');
  return (
    <div className={styles.navbarContainer}>

        <div className={styles.logo}>
          <div className={styles.logoText}>Gallery</div> 
        </div>  

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


        <div className={styles.logArea}>
          <button className={`${styles.signin}  ${styles.signButton}`} onClick={()=>{setShowSignIn(true); setFrom(fromSignIn);}} >Log In</button>
          <button className={`${styles.signup}  ${styles.signButton}`} onClick={()=>{setShowSignIn(true); setFrom(fromSignUp);}} >Sign Up</button>
        </div>

      
        <SignInUp from={from} setShowSignIn={setShowSignIn} showSignIn={showSignIn} />

    
    </div>
  )
}

export default NavBar