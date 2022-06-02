import styles from './features.module.scss';
import image from '../../assets/image-1.jpg';
import Link from 'next/link';

const Features = () => {

    return (
        <section className={styles.features}>
            <img className={styles.image} src={image.src} />
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>
                     Perfect planner to perfect life
                </h2>
                <p className={styles.listTitle}>Our guided planner helps you: </p>
                <ul className={styles.featuresList}>
                    <li className={styles.feature}>Find clarity in chaos</li>
                    <li className={styles.feature}>Better spent time durning day</li>
                    <li className={styles.feature}>Experience the joy of gratitude</li>
                    <li className={styles.feature}>Reflect on the day</li>
                </ul>
                <Link href='/shop'>
                    <a className={styles.textButton}>Discover all planners</a>
                </Link>
            </div>
        </section>
     )
}

export default Features;