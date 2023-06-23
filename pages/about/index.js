import TapedPaper from '@/components/commons/tapedPaper/tapedPaper'
import Error404 from '@/components/errors/error404'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <>
      <Head>
        <title>About the Website</title>
        <meta name="description" content="Information about the site and the creator of the site." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        about page
      </div>
    </>
    
  )
}

export default About