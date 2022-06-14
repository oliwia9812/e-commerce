import styles from './styles/form-submitted.module.scss';
import image from '../assets/form-submitted.jpg';

const FormSubmitted = () => {
    return (
        <section className={styles.formSubmitted}>
            <div className={styles.wrapper}>
                <h1 className={styles.h1}>Thank you</h1>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image.src} />
                </div>
                <p className={styles.info}>Your form has been sent successfully! </p>
            </div>
        </section>
    )
}

export default FormSubmitted