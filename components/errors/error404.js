import React from 'react'
import styles from './errors.module.scss'
import TapedPaper from '../commons/tapedPaper/tapedPaper'
const Error404 = () => {

  return (
    <section className={styles.error404}>
        <div className={styles.frame}>
            <TapedPaper>
                <div className={styles.message}>
                    <p className={styles.fourOfour}>
                        404
                    </p>
                    <p className={styles.messageInfo}>Seems like someone took this art off for an unauthorized exhibition. We&#39;re on the hunt to reclaim it</p>
                </div>
            </TapedPaper>
            
        </div>
    </section>
  )
}

export default Error404