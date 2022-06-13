import styles from './Newsletter.module.scss';
import { useEmail } from '../../validate/useForm';
import { BsArrowRight } from 'react-icons/bs';
import {ValidateEmail} from '../../validate/validate';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Newsletter = () => {
    

    const { email, handleChange, handleSubmit, errors } = useEmail(submitForm, ValidateEmail); 
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
        <section className={styles.newsletter}>
            <div className={styles.content}>
                <h2>Welcome to our community!</h2>
                <p>Subscribe to recive 10% off your first order</p>
                <form autoComplete='off' noValidate onSubmit={handleSubmit} className={styles.form}>
                    <input 
                        autoComplete='off'
                        className={styles.input} 
                        id='email' 
                        name='email' 
                        type='email' 
                        placeholder='Enter your email'
                        value={email}
                        onChange={handleChange}
                    />
                    {errors && <p className={styles.error}>{errors.email}</p>}
                    <button className={styles.button} type='submit'>
                        <BsArrowRight fill='#fff' />
                    </button>
                </form>
                {isSubmitted &&  <Modal />}
            </div>
        </section>
        </>
       
    )
}

export default Newsletter;