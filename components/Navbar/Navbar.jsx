import Logo from '../../assets/Logo.png';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { MdOutlineShoppingBag, MdOutlineSearch } from 'react-icons/md';
import { useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';


const Navbar = () => {

    const [isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => {
        setIsOpen(prevState => !prevState)
    }


    return (
       <>
            <nav className={styles.nav}>
                <button onClick={handleOpen} className={styles.navMobileMenuButton} type='button'>
                    <span className={!isOpen ? styles.navMobileMenu : styles.isOpen}></span>
                    <span className={!isOpen ? styles.navMobileMenu : styles.isOpen}></span>
                    <span className={!isOpen ? styles.navMobileMenu : styles.isOpen}></span>
                </button>

                <div className={styles.navLinks}>
                    <Link href='/shop'>
                        <a className={styles.navLink}>Shop</a>
                    </Link>
                    <Link href='/about'>
                        <a className={styles.navLink}>About</a>
                    </Link>
                    <Link href='/contact'>
                        <a className={styles.navLink}>Contact</a>
                    </Link>
                    <Link className={styles.navLink} href='/blog'>
                        <a className={styles.navLink}>Blog</a>
                    </Link>
                </div>
                <img className={styles.logo} src={Logo.src} />
                <div className={styles.navActions}>
                    <div className={styles.searchBar}>
                        <input className={styles.searchInput} type='text' />
                        <MdOutlineSearch className={styles.searchIcon} />
                    </div>
                    <div className={styles.cartBtn} onClick=''>
                        <MdOutlineShoppingBag  className={styles.cartIcon} />
                        <span>(0)</span>
                    </div>
                </div>
                {isOpen &&  <div className={styles.navMobile}>
                        
                </div> }
            </nav>
       </>
        
    )
}

export default Navbar;