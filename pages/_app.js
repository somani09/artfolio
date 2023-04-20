import Footer from '@/components/footer'
import NavBar from '@/components/navBar/navBar'
import '@/styles/globals.scss'
import '../styles/custom.scss'


export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
        <div className='w100 plr20 mt30'>
        <Component {...pageProps} />
        </div>
      <Footer/>
    </>
  )
}
