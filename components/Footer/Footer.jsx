import styles from './Footer.module.scss';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useEmail } from '../../validate/useForm';
import { ValidateEmail } from '../../validate/validate';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Footer = () => {

    const { email, handleChange, handleSubmit, errors } = useEmail(submitForm, ValidateEmail);
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

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
                        <form noValidate autoComplete='off' onSubmit={handleSubmit} className={styles.form}>
                            <input
                             autoComplete='off'
                             className={styles.input} 
                             placeholder='Enter your email'
                             id='email'
                             name='email'
                             type='email'
                             value={email}
                             onChange={handleChange}
                            />
                            <button className={styles.button}>
                                <BsArrowRight fill='#fff' />
                            </button>
                        </form>
                        {errors && <p className={styles.error}>{errors.email}</p>}
                        {isSubmitted && <Modal dark />}
                        </div>
                </div>
            <p className={styles.rights}> &copy; 2022 Loomipaper. All right reserved </p>
        </footer>
    )
}

export default Footer;