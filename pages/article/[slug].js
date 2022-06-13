import { client } from '../../lib/client';
import styles from '../styles/article.module.scss';
import { urlFor } from '../../lib/client';

const ArticleDetails = ({ article }) => {

    console.log(article);

    return (
            <section className={styles.article}>
                <p className={styles.date}>{article.dateCreated}</p>
                <h1 className={styles.title}>{article.title}</h1>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={urlFor(article.image)} />
                    <p className={styles.category}>{article.category}</p>
                </div>
                <p className={styles.body}>
                    {article.articleBody}
                </p>
            </section>
    )
}

export const getStaticPaths = async () => {
    const articles = await client.fetch(`*[_type == "article"] {slug {current}}`);
    const paths = articles.map(article => ({
        params: {
            slug: article.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const article = await client.fetch(`*[_type == "article" && slug.current == '${slug}'][0]`);

    return {
        props: {
            article
        }
    }
}

export default ArticleDetails;