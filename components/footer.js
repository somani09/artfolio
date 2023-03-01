import React from 'react'
import styles from './extra.module.scss'

import { AiFillCopyrightCircle } from 'react-icons/ai'


const Footer = () => {
  return (
    <div id="footer" className={styles.footer}>
        Copyright &nbsp; <AiFillCopyrightCircle />&nbsp; 2023  Vaibhav Somani
    </div>
  )
}

export default Footer