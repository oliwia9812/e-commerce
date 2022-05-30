import styles from './Button.module.scss';

const Button = ({ textButton }) => {
    return (
        <button className={styles.button} type='button'> { textButton} </button>
    )
}

export default Button