import { urlFor } from "../../lib/client";
import Button from "../Button/Button";
import styles from './Hero.module.scss';

const Hero = ({ heroBannerData }) => {

    return( 
        <>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <p className={styles.label}>{heroBannerData.label}</p>
                    <h1 className={styles.heading}>{heroBannerData.heading}</h1>
                    <p className={styles.body}>{heroBannerData.body}</p>
                    <Button textButton={heroBannerData.textButton}/>
                </div>
                <img className={styles.image} src={urlFor(heroBannerData.image)} />
            </div>
        </>
    )
}

export default Hero