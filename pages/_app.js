import Layout from '../components/Layout/Layout'
import '../styles/globals.css';
import { StateProvider } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return(
    <StateProvider>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </StateProvider>
  )
}

export default MyApp
