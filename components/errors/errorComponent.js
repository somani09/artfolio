'use client'
import React, { useEffect, useState } from 'react'
import styles from './errors.module.scss'
import TapedPaper from '../commons/tapedPaper/tapedPaper'

const ErrorComponent = ({code}) => {

  const [message, setMessage] = useState("");

  useEffect(() => {
    switch(code){
      case 404:
        setMessage("Seems like someone took this art off for an unauthorized exhibition. We&#39;re on the hunt to reclaim it.");
        break;
      case 400:
        setMessage("Looks like someone misplaced the paintbrushes. Our server couldn't make sense of the colorful chaos.");
        break;
      case 401:
        setMessage("The artwork whispered, 'You shall not pass!' Only the chosen brush wielders may step into this realm.");
        break;
      case 403:
        setMessage("The gallery gates stand tall, silently guarding the secrets of artistic enlightenment. Only the worthy shall enter.");
        break;
      case 500:
        setMessage("Our art server stumbled upon a palette malfunction. The colors got tangled in a whimsical chaos!");
        break;
      default:
        setMessage("Looks like even our artistic genius is stumped. We're scratching our heads as to why this happened. Please bear with us");
        break;
  
    }
  }, [])
  

  

  return (
    <section className={styles.error404}>
        <div className={styles.frame}>
            <TapedPaper>
                <div className={styles.message}>
                    <p className={styles.fourOfour}>
                        {code||"Oops!"}
                    </p>
                    <p className={styles.messageInfo}>{message}</p>
                </div>
            </TapedPaper>
            
        </div>
    </section>
  )
}

export default ErrorComponent