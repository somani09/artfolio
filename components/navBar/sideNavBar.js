'use client';
import React, { useState } from 'react'
import styles from './navBar.module.scss'
import {AiOutlineBars} from 'react-icons/ai'
import {CgClose} from 'react-icons/cg'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import SignInUp from '../signInUp/signInUp'
const SideNavBar = () => {
  const[navOpen, setNavOpen] = useState(false);
  let fromSignIn = "signIn";
  let fromSignUp = "signUp";
  const [showSignIn, setShowSignIn] = useState(false);
  const [from, setFrom] = useState(null);
  const router = useRouter();
  const pathname = usePathname()
  const isArtist = pathname.startsWith('/artists');  return (
    <header className={styles.sideNavBar}>
      <div className={styles.navButtonArea}>
        {!navOpen?<AiOutlineBars  className={styles.navButton} onClick={()=>setNavOpen(true)}/>:<CgClose  className={styles.navButton} onClick={()=>setNavOpen(false)}/>}
      </div>
     <nav className={`${styles.navArea} ${navOpen?styles.open:styles.close}`}>
          <Link href="/">
              <div  onClick={()=>setNavOpen(false)} className={`${styles.link} ${pathname == "/" ? styles.active : ""}`}>Home</div>
          </Link>

          <Link href="/artists">
              <div onClick={()=>setNavOpen(false)} className={`${styles.link} ${isArtist ? styles.active : ""}`}>Artists</div>
          </Link>

          <Link href="/about">
              <div onClick={()=>setNavOpen(false)} className={`${styles.link} ${pathname == "/about" ? styles.active : ""}`}>About</div>
          </Link>

          <Link href="/community">
              <div onClick={()=>setNavOpen(false)} className={`${styles.link} ${pathname == "/community" ? styles.active : ""}`}>Community</div>
          </Link>
          <div className={styles.logArea}>
            <button className={`${styles.signin}  ${styles.signButton}`} onClick={()=>{setShowSignIn(true); setNavOpen(false); setFrom(fromSignIn);}} >Log In</button>
            <button className={`${styles.signup}  ${styles.signButton}`} onClick={()=>{setShowSignIn(true); setNavOpen(false); setFrom(fromSignUp);}} >Sign Up</button>
          </div>
      </nav>

      <div className={`${styles.navAreaBack} ${navOpen?styles.navAreaBackOpen:styles.navAreaBackClose}`} onClick={()=>setNavOpen(false)} ></div>
      
      <SignInUp from={from} setShowSignIn={setShowSignIn} showSignIn={showSignIn} />
        
      <div className={styles.logo}>
        <h1 className={styles.logoText}>Gallery</h1>  
      </div>  

    </header>
  )
}

export default SideNavBar