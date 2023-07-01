import React from 'react'
import styles from './extra.module.scss'

import { AiFillCopyrightCircle } from '@react-icons/all-files/ai/AiFillCopyrightCircle'


const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
        Copyright &nbsp; <AiFillCopyrightCircle />&nbsp; 2023  Vaibhav Somani
    </footer>
  )
}

export default Footer