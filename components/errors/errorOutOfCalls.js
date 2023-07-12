import React from 'react'
import styles from './errors.module.scss'
import TapedPaper from '../commons/tapedPaper/tapedPaper'
const ErrorOutOfCalls = () => {

  return (
    <section className={styles.error404}>
        <div className={styles.frame}>
            <TapedPaper>
                <div className={styles.message}>
                    <p className={styles.fourOfour}>
                        Sooooo...
                    </p>
                    <p className={styles.messageInfo}>I can't afford more API calls right now, Sorry.</p>
                </div>
            </TapedPaper>
            
        </div>
    </section>
  )
}

export default ErrorOutOfCalls