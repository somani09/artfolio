'use client'
import ErrorComponent from '@/components/errors/errorComponent'
import React from 'react'

const error = ({error,reset}) => {
    console.log("Error caught")
  return (
    <div>
        <ErrorComponent code={error}/>
    </div>  
  )
}

export default error