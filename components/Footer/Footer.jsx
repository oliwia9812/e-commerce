import styles from './Footer.module.scss';
import Link from 'next/link';
import {BsArrowRight} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className={styles.footer}>
                <div className={styles.grid}>
                        <p className={styles.title}>Information</p>
                        <ul className={styles.list}>
                            <Link href='/blog'>
                                <li className={styles.listItem}>Blog</li>
                            </Link>
                            <Link href='/about'>
                                <li className={styles.listItem}>About</li>
                            </Link>
                            <Link href='/contact'>
                                <li className={styles.listItem}>Contact Us</li>
                            </Link>
                        </ul>
                        <p className={styles.title}>Let's connect</p>
                        <ul className={styles.list}>
                            <Link href='https://www.instagram.com/'>
                                <li className={styles.listItem}>Instagram</li>
                            </Link>
                            <Link href='https://www.facebook.com/'>
                                <li className={styles.listItem}>Facebook</li>
                            </Link>
                            <Link href='https://www.pinterest.com/'>
                                <li className={styles.listItem}>Pinterest</li>
                            </Link>
                        </ul>
                        <p className={styles.title}>Join the community</p>
                        <div className={styles.list}>
                        <p className={styles.desc}>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <form className={styles.form}>
                            <input className={styles.input} placeholder='Enter your email' />
                            <button className={styles.button}>
                                <BsArrowRight fill='#fff' />
                            </button>
                        </form>
                        </div>
                </div>
            <p className={styles.rights}> &copy; 2022 Loomipaper. All right reserved </p>
        </footer>
    )
}

export default Footer;