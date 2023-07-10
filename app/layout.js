
import '@/styles/globals.scss'
import '../styles/custom.scss'
import { Inter } from '@next/font/google'
import Footer from '@/components/footer'
import NavBar from '@/components/navBar/navBar'
import SideNavBar from '@/components/navBar/sideNavBar'
import backgroundImageMobile from '../public/assets/background4.2.jpg'
import backgroundImageDesktop from '../public/assets/background4.jpg'
export const metadata = {
    title: 'Gallery by Vaibhav Somani',
    description: 'The website is for self learning purpose. I\'m learning Next.js',
    colorScheme: 'light only'
  }


// className={Inter.className}

export default function RootLayout({ children }) {
    
    return (
        <html lang="en">
            <body >
                <div style={{backgroundImage: `url(${backgroundImageMobile.src})`}} className="backgroundMobile"></div>
                <div style={{backgroundImage: `url(${backgroundImageDesktop.src})`}} className="backgroundDesktop"></div>
                <NavBar />
                <SideNavBar />
                <div className='w100'>
                    {children}
                </div>
                <Footer/>
            </body>
      
        </html>
    )
}
