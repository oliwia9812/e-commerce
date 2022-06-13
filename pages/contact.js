import Headline from '../components/Headline/Headline';
import headlineImage from '../assets/headline_contact.jpg';
import styles from './styles/contact.module.scss';
import Button from '../components/Button/Button';
import Link from 'next/link';
import { useForm } from '../validate/useForm';
import { ValidateForm } from '../validate/validate';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'




const Contact = () => {

    const { handleChange, handleSubmit, errors, formValues } = useForm(formSubmit, ValidateForm);
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const router = useRouter();


    function formSubmit() {
        setIsSubmitted(true);
    }

    useEffect(() => {
        
        isSubmitted && router.push('/form-submitted')
        
        },[isSubmitted])



    return (
        <>
            <Headline src={headlineImage.src} title='Contact' content='The best way to reach us is via email at hello@loomipaper.co or use the contact below!' /> 
            <section className={styles.contact}>
                <form onSubmit={handleSubmit} noValidate autoComplete='off' className={styles.form}>
                    <input 
                        autoComplete='off'
                        type='text' 
                        className={styles.input} 
                        placeholder='Your name'
                        name='name'
                        value={formValues.name}
                        id='name'
                        onChange={handleChange}
                        />
                    {errors && <p className={styles.error}>{errors.name}</p>}
                    <input 
                        autoComplete='off'
                        type='email' 
                        className={styles.input} 
                        placeholder='Your email'
                        name='email'
                        value={formValues.email}
                        id='email'
                        onChange={handleChange}
                        />
                    {errors && <p className={styles.error}>{errors.email}</p>}
                    <textarea 
                        autoComplete='off'
                        className={styles.textarea} 
                        placeholder='How can we help?'
                        name='message'
                        value={formValues.message}
                        id='message'
                        onChange={handleChange}
                        />
                    {errors && <p className={styles.error}>{errors.message}</p>}
                    <Button textButton='Send message' type='submit' />
                </form>
            </section>
        </>
    )
}

export default Contact;