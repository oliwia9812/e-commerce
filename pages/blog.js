import styles from './styles/blog.module.scss';
import Headline from '../components/Headline/Headline';
import headlineImage from '../assets/headline_blog.jpg';
import { client, urlFor } from '../lib/client';



const Blog = ({ articles }) => {

    return (
        <section className={styles.blog}>
                <Headline src={headlineImage.src} title='Blog' content='A collection of resources, advice and reminders for everyone who are ready to align their purpose with passion and  built a better life'  /> 
                <div className={styles.articles}>
                    <div className={styles.categories}>
                        <p>Category: </p>
                        <ul className={styles.categoryList}>
                            <li className={styles.category}>All</li>
                            <li className={styles.category}>Time managment</li>
                            <li className={styles.category}>Business</li>
                            <li className={styles.category}>Personal</li>
                        </ul>
                        </div>
                        <div className={styles.articles__wrapper}>
                        {articles.length >= 1  
                        && articles.map(article => (
                            <div className={styles.article}>
                                <div className={styles.article__imageContainer}>
                                    <img className={styles.article__image} src={urlFor(article.image)} />
                                </div>
                                <div className={styles.article__content}>
                                    <p className={styles.article__category}>{article.category}</p>
                                    <h2 className={styles.article__title}>
                                        {article.title}
                                    </h2>
                                </div>
                            </div>
                        ))}
                        </div>
                </div>
        </section>
    )
}


export const getServerSideProps = async() => {
    const articles = await client.fetch(`*[_type == "article"]`);

    return { 
        props: {
            articles
        }
    }
}


export default Blog;

