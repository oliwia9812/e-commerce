import { useState, useRef } from 'react';
import styles from './Social.module.scss';
import {AiOutlineInstagram} from 'react-icons/ai';

const Social = () => {

    const socialList = [false, false, false, false, false];
    const [ onMouseOver, setOnMouseOver ] = useState(socialList);
  

    const handleMouseOver = (id) => {
        setOnMouseOver(prevList => ({
            ...prevList,
            [id]: true
        }));
    }

    const handleMouseLeave = (id) => {
        setOnMouseOver(prevList => ({
            ...prevList,
            [id]: false
        }));
    }

    return (
        <section className={styles.social}>
            <h2 className={styles.title}>@loomipaper</h2>
            <p> Find us on Instagram for daily inspiration</p>

            <div className={styles.container}>
                {socialList.map( (item, i) => (
                    <div onMouseLeave={() => handleMouseLeave(i)} onMouseEnter={() => handleMouseOver(i)} className={styles.box}>
                        {onMouseOver[i] && <div className={styles.box__overlay}>
                            <AiOutlineInstagram className={styles.box__overlayIcon} /> 
                         </div> }
                    </div>
                ))}
               
            </div>
        </section>
    )
}

export default Social;