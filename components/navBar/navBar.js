'use client';
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react'
import styles from './navBar.module.scss'
import SignInUp from '../signInUp/signInUp';
const NavBar = () => {
  let fromSignIn = "signIn";
  let fromSignUp = "signUp";
  const [showSignIn, setShowSignIn] = useState(false);
  const [from, setFrom] = useState(null);
  const router = useRouter();
  const pathname = usePathname()
  const isArtist = pathname.startsWith('/artists');
  return (
    <header className={styles.navbarContainer}>

        <div className={styles.logo}>
          <h1 className={styles.logoText}>Gallery</h1> 
        </div>  

        <nav className={styles.pageLinks}>
          <Link href="/">
              <div className={`${styles.link} ${pathname == "/" ? styles.active : ""}`}>Home</div>
          </Link>

          <Link href="/artists">
              <div className={`${styles.link} ${isArtist ? styles.active : ""}`}>Artists</div>
          </Link>

          <Link href="/about">
              <div className={`${styles.link} ${pathname == "/about" ? styles.active : ""}`}>About</div>
          </Link>

          <Link href="/community">
              <div className={`${styles.link} ${pathname == "/community" ? styles.active : ""}`}>Community</div>
          </Link>
          
        </nav>


        <div className={styles.logArea}>
          <button aria-label="Log In" className={`${styles.signin}  ${styles.signButton}`} onClick={()=>{setShowSignIn(true); setFrom(fromSignIn);}} >Log In</button>
          <button aria-label="Sign Up" className={`${styles.signup}  ${styles.signButton}`} onClick={()=>{setShowSignIn(true); setFrom(fromSignUp);}} >Sign Up</button>
        </div>

      
        <SignInUp from={from} setShowSignIn={setShowSignIn} showSignIn={showSignIn} />

    
    </header>
  )
}

export default NavBar