import Error404 from '@/components/errors/error404'
import React from 'react'
import Head from 'next/head'
export const metadata = {
  title: '404: Page Stolen',
  description: '404 error page',
}

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