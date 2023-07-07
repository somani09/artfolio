import React from 'react'
import CommunityClient from './communityClient'
const imageUrl = "/assets/previewImage.png"

export const metadata = {
  title: 'Community',
  description: "Immerse yourself in the thriving artistic community at the Gallery: Connect, collaborate, and celebrate creativity with like-minded individuals who share a passion for art and photography.",
  openGraph: {
    type:'website',
    url:'https://gallery-eight-kappa.vercel.app/',
    title: 'Community',
    description: "Immerse yourself in the thriving artistic community at the Gallery: Connect, collaborate, and celebrate creativity with like-minded individuals who share a passion for art and photography.",
    images:[{
      url: imageUrl,
    }] ,
    siteName:'Gallery by Somani'
  },
  twitter: {
    title: 'Community',
    description: "Immerse yourself in the thriving artistic community at the Gallery: Connect, collaborate, and celebrate creativity with like-minded individuals who share a passion for art and photography.",
    images: [imageUrl]
  }
}

const Community = () => {

  return (
    <>
      <CommunityClient />
    </>

  )
}

export default Community