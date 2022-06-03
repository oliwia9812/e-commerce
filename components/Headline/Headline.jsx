import styles from './Headline.module.scss';

const Headline = ({ src, title, content }) => {
    return (
        <div className={styles.headline}>
            <img className={styles.headline__image} src={src} />
            <h1 className={styles.headline__title}>{title}</h1>
            <p className={styles.headline__content}>{content}</p>
            
        </div>
    )
}

export default Headline;