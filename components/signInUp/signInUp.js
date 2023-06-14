import React from 'react'
import styles from './signInUp.module.scss'
import {FcGoogle} from 'react-icons/fc'
import {ImFacebook2} from 'react-icons/im'
import {CgCloseR} from 'react-icons/cg'
const SignInUp = ({from, setShowSignIn, showSignIn}) => {
    let fromSignIn = "signIn";
    let fromSignUp = "signUp";
    return (
        <div>
            <div className={`${styles.outer} ${showSignIn==true?styles.open:styles.close} `} onClick={()=>setShowSignIn(false)}></div>
            <div className={`${styles.signForm} ${showSignIn==true?styles.open:styles.close}`}>
                <button className={styles.closeButton} onClick={()=>setShowSignIn(false)}><CgCloseR size={30} /></button>
                <div className={styles.greetings}>Hello there</div>
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
                    <label for="inp" className={styles.inp}>
                        <input type="email" id="inp" placeholder="&nbsp;"/>
                        <span className={styles.label}>Email</span>
                        <span className={styles.focus_bg}></span>
                    </label>
                    <label for="inp" className={styles.inp}>
                        <input type="pasword" id="inp" placeholder="&nbsp;"/>
                        <span className={styles.label}>password</span>
                        <span className={styles.focus_bg}></span>
                    </label>
                    <button className={styles.submit}>{from==fromSignIn?"Sign In":"Sign Up"}</button>
                    </div>
                    <div className={styles.usingServices}>
                        <div className={styles.requestText}>Sign {from==fromSignIn?"in":"up"} with</div>
                        <div className={styles.services}>
                            <button className={styles.serviceIconsWrapper}><FcGoogle className={`${styles.google} ${styles.icons}`}/> <span className={styles.serviceText}>Google</span> </button>
                            <button className={styles.serviceIconsWrapper}><ImFacebook2 className={`${styles.facebook} ${styles.icons}`}/> <span className={styles.serviceText}>Facebook</span></button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInUp

