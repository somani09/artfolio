'use client';
import React from 'react'
import styles from './loading.module.scss'
import { MagnifyingGlass } from  'react-loader-spinner'
const Loader = () => {
  return (
    <div className={styles.loader}> 
      <MagnifyingGlass
        visible={true}
        height="150"
        width="160"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#e15b64'
      />
    Loading...
    </div>
  )
}

export default Loader