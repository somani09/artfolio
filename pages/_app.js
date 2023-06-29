import Footer from '@/components/footer'
import NavBar from '@/components/navBar/navBar'
import '@/styles/globals.scss'
import '../styles/custom.scss'
import SideNavBar from '@/components/navBar/sideNavBar'
import { storeWrapper } from '@/store/store'
import { Provider } from "react-redux";

function App({ Component, ...rest }) {
  const { store, props } = storeWrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <>
    <Provider store={store}>
      <div className="background"></div>
      <NavBar />
      <SideNavBar />
      <div className='w100'>
      <Component {...pageProps} />
      </div>
      <Footer/>
    </Provider>
    </>
  )
}

export default App