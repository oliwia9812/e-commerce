import styles from './Modal.module.scss';

const Modal = ({ dark }) => {

    console.log(dark)
    return (
       <section className={dark ? [styles.darkModal] : [styles.lightModal] }>
           <h2>Thanks for subscribing!</h2>
           <p>Check your email for your confirmation.</p>
       </section>
    )
}

export default Modal;