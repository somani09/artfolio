import Error404 from '@/components/errors/error404'
import Head from 'next/head'
import React from 'react'

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>404: Page Stolen</title>
        <meta name="description" content="404 error page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Error404 />
    </>
  )
}

export default ErrorPage