import Headline from '../components/Headline/Headline';
import headlineImage from '../assets/headline_contact.jpg';
import styles from './styles/contact.module.scss';
import Button from '../components/Button/Button';


const Contact = () => {
    return (
        <>
            <Headline src={headlineImage.src} title='Contact' content='The best way to reach us is via email at hello@loomipaper.co or use the contact below!' /> 
            <section className={styles.contact}>
                <form className={styles.form}>
                    <input type='text' className={styles.input} placeholder='Your name' />
                    <input type='email' className={styles.input} placeholder='Your email' />
                    <textarea className={styles.textarea} placeholder='How can we help?' />
                    <Button textButton='Send message' />
                </form>
            </section>
        </>
    )
}

export default Contact;