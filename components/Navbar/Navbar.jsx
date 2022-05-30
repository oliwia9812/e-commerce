import Logo from '../../assets/Logo.svg';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { IoSearchOutline, IoBagOutline, IoCloseOutline } from 'react-icons/io5';
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

                <Link href='/'>
                    <img className={styles.logo} src={Logo.src} />
                </Link>

                <div className={styles.navActions}>
                    {isSearching ? <IoCloseOutline onClick={handleSearch} className={styles.searchIcon} /> : <IoSearchOutline onClick={handleSearch} className={styles.searchIcon} /> }
                    <div className={styles.cartBtn} onClick={() => setShowCart(true)}>
                        <IoBagOutline className={styles.cartIcon} />
                        <span>({totalQuantities})</span>
                    </div>
                </div>
                {isOpen &&  <div className={styles.navMobile}></div> }
            </nav>
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