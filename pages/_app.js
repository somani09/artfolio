import Footer from '@/components/footer'
import NavBar from '@/components/navBar/navBar'
import '@/styles/globals.scss'
import '../styles/custom.scss'
import SideNavBar from '@/components/navBar/sideNavBar'


export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="background"></div>
      <NavBar />
      <SideNavBar />
      <div className='w100'>
      <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  )
}
