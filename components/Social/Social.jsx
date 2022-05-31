import styles from './Social.module.scss';

const Social = () => {

    return (
        <section className={styles.social}>
            <h2 className={styles.title}>@loomipaper</h2>
            <p> Find us on Instagram for daily inspiration</p>
            <div className={styles.container}>
                <div className={`${[styles.box]} ${[styles.box1]}`}></div>
                <div className={`${[styles.box]} ${[styles.box2]}`}></div>
                <div className={`${[styles.box]} ${[styles.box3]}`}></div>
                <div className={`${[styles.box]} ${[styles.box4]}`}></div>
                <div className={`${[styles.box]} ${[styles.box5]}`}></div>
            </div>
        </section>
    )
}

export default Social;