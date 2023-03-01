import Footer from '@/components/footer'
import NavBar from '@/components/navBar/navBar'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
