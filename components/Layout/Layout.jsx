import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';


const Layout = ({ children }) => {
    return (
      <div className={styles.layout}>
        <Head>
            <title>Loomipaper - planners</title>
        </Head>
        <Navbar />
        <main className='main-container'>
            {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
  
  export default Layout