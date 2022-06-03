import styles from './Button.module.scss';

const Button = ({ textButton, outline }) => {
    return (
        <button className={ outline ? styles.buttonOutline : styles.button } type='button'> { textButton} </button>
    )
}

export default Button