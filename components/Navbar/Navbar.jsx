import Logo from '../../assets/Logo.svg';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { IoSearchOutline, IoBagOutline, IoCloseOutline, IoHeartOutline } from 'react-icons/io5';
import Cart from '../Cart/Cart';
import { useStateContext } from '../../context/StateContext';


const Navbar = () => {

    const [isOpen, setIsOpen ] = useState(false);
    const [isSearching, setIsSearching ] = useState(false);

    const handleOpen = () => {
        setIsOpen(prevState => !prevState)
    }

    const handleSearch = () => {
        setIsSearching(prevState => !prevState);
    }

    const { showCart, setShowCart, totalQuantities } = useStateContext()


    return (
       <>
            <div className={styles.promoBar}>
                <p> Free shipping for all orders above $49 </p>
            </div>
            <nav className={styles.nav}>
                <button onClick={handleOpen} className={styles.navMobileMenuButton} type='button'>
                    <span className={!isOpen ? styles.navMobileMenu : styles.isOpen}></span>
                    <span className={!isOpen ? styles.navMobileMenu : styles.isOpen}></span>
                    <span className={!isOpen ? styles.navMobileMenu : styles.isOpen}></span>
                </button>

                <div className={styles.navLinks}>
                    <Link href='/shop'>
                        <a className={styles.navLink}>Shop all</a>
                    </Link>
                    <Link href='/about'>
                        <a className={styles.navLink}>About</a>
                    </Link>
                    <Link href='/contact'>
                        <a className={styles.navLink}>Contact</a>
                    </Link>
                    <Link href='/blog'>
                        <a className={styles.navLink}>Blog</a>
                    </Link>
                </div>

                <Link href='/'>
                    <img onClick={ isOpen && handleOpen} className={styles.logo} src={Logo.src} />
                </Link>

                <div className={styles.navActions}>
                    <IoHeartOutline className={styles.icon} />
                    {isSearching ? <IoCloseOutline onClick={handleSearch} className={styles.icon} /> : <IoSearchOutline onClick={handleSearch} className={styles.icon} /> }
                    <div className={styles.cartBtn} onClick={() => setShowCart(true)}>
                        <IoBagOutline className={styles.icon} />
                        <span>({totalQuantities})</span>
                    </div>
                </div>
               
            </nav>
            {isOpen &&  <div className={styles.navMobile}>
                <div className={styles.navMobileContent}>
                    <div className={styles.mobileNavLinks}>
                        <Link href='/shop'>
                            <a onClick={ handleOpen} className={styles.mobileNavLink}>Shop all</a>
                        </Link>
                
                        <Link href='/about'>
                            <a onClick={ handleOpen} className={styles.mobileNavLink}>About</a>
                        </Link>
                        <Link href='/contact'>
                            <a onClick={ handleOpen} className={styles.mobileNavLink}>Contact</a>
                        </Link>
                        <Link href='/blog'>
                            <a onClick={ handleOpen} className={styles.mobileNavLink}>Blog</a>
                        </Link>
                    </div>
                </div>
            </div> }
            {isSearching && <div className={styles.searchBar}>
                <div className={styles.searchContainer}>
                    <IoSearchOutline className={styles.icon} />
                    <input autoFocus='autofocus' placeholder='Search...' className={styles.searchInput} type='text' />
                </div>
            </div>}

           {showCart && <Cart />} 
       </>
        
    )
}

export default Navbar;