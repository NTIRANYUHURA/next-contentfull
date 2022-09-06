
import Navbar from '../components/Navbar'
import Main from '../pages/Main'

import '../styles/globals.css'
import Gallery from '../Pages/gallery';
import Contact from '../Pages/contact';


function MyApp({ Component, pageProps }) {
  return(
    <>
  <Navbar/>
  <Main/>
  <Gallery/>
 
  <Contact/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
