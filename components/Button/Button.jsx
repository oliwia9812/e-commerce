import styles from './Button.module.scss';
import React from 'react';


const Button = React.forwardRef(({ onClick, outline, textButton, type}, ref) => {

    return (
        <button type={type} onClick={onClick} className={ outline ? styles.buttonOutline : styles.button }> { textButton } </button>
    )
})

export default Button