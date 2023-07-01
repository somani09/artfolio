import React from 'react'
import styles from './signInUp.module.scss'
import {FcGoogle} from  '@react-icons/all-files/fc/FcGoogle'
import {ImFacebook2} from  '@react-icons/all-files/im/ImFacebook2'
import {CgCloseR} from  '@react-icons/all-files/cg/CgCloseR'
const SignInUp = ({from, setShowSignIn, showSignIn}) => {
    let fromSignIn = "signIn";
    let fromSignUp = "signUp";
    return (
        <section>
            <div className={`${styles.outer} ${showSignIn==true?styles.open:styles.close} `} onClick={()=>setShowSignIn(false)}></div>
            <div className={`${styles.signForm} ${showSignIn==true?styles.open:styles.close}`}>
                <button className={styles.closeButton} onClick={()=>setShowSignIn(false)}><CgCloseR size={30} /></button>
                <p className={styles.greetings}>Hello there</p>
                <div className={styles.logArea}>
                    <div className={styles.usingEmail}>
                        {/* <div className={styles.inputArea}>
                            <label class={styles.input}>
                                <input class={styles.input__field} type="text" placeholder=" " />
                                <span class={styles.input__label}>Email</span>
                            </label>
                        </div>   
                        <div className={styles.inputArea}>
                            <label class={styles.input}>
                                <input class={styles.input__field} type="text" placeholder=" " />
                                <span class={styles.input__label}>password</span>
                            </label>
                        </div>    */}
                    <label htmlFor="inp" className={styles.inp}>
                        <input type="email" id="inp" placeholder="&nbsp;"/>
                        <h1 className={styles.label}>Email</h1>
                        <span className={styles.focus_bg}></span>
                    </label>
                    <label htmlFor="inp" className={styles.inp}>
                        <input type="pasword" id="inp" placeholder="&nbsp;"/>
                        <h2 className={styles.label}>password</h2>
                        <span className={styles.focus_bg}></span>
                    </label>
                    <button className={styles.submit}>{from==fromSignIn?"Sign In":"Sign Up"}</button>
                    </div>
                    <div className={styles.usingServices}>
                        <p className={styles.requestText}>Sign {from==fromSignIn?"in":"up"} with</p>
                        <div className={styles.services}>
                            <button className={styles.serviceIconsWrapper}><FcGoogle className={`${styles.google} ${styles.icons}`}/> <span className={styles.serviceText}>Google</span> </button>
                            <button className={styles.serviceIconsWrapper}><ImFacebook2 className={`${styles.facebook} ${styles.icons}`}/> <span className={styles.serviceText}>Facebook</span></button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignInUp

