import styles from './Button.module.scss';
import React from 'react';


const Button = React.forwardRef(({ onClick, outline, textButton}, ref) => {

    return (
        <button onClick={onClick} className={ outline ? styles.buttonOutline : styles.button } type='button'> { textButton } </button>
    )
})

export default Button