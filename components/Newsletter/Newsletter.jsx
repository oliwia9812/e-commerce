import styles from './Newsletter.module.scss';
import {BsArrowRight} from 'react-icons/bs';

const Newsletter = () => {
    return (
        <section className={styles.newsletter}>
            <div className={styles.content}>
                <h2>Welcome to our community!</h2>
                <p>Subscribe to recive 10% off your first order</p>
                <form className={styles.form}>
                    <input className={styles.input} type='email' placeholder='Enter your email' />
                    <button className={styles.button} type='submit'>
                        <BsArrowRight fill='#fff' />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter;