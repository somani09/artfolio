import React from 'react'
import styles from './carousel.module.scss'

const Card = ({data,className}) => {
  return (
    <div className={`${styles.card} ${className!=null?className:''}`}>{data}</div>
  )
}

export default Card