import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';
import Newsletter from '../Newsletter/Newsletter';


const Layout = ({ children }) => {
    return (
      <div className={styles.layout}>
        <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0" />

            <title>Loomipaper - planners</title>
        </Head>
        <Navbar />
        <main className='main-container'>
            {children}
        </main>
        <footer>
          <Newsletter />
          <Footer />
        </footer>
      </div>
    )
  }
  
  export default Layout