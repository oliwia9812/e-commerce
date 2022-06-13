import styles from './styles/blog.module.scss';
import Headline from '../components/Headline/Headline';
import headlineImage from '../assets/headline_blog.jpg';
import { client, urlFor } from '../lib/client';
import Link from 'next/link';
import { useState } from 'react';


const Blog = ({ articles }) => {

    const initialList = [
        {
            id: 0,
            category: 'All',
            isActive: true,
        },
        {
            id: 1,
            category: 'Business',
            isActive: false
        },
        {
            id: 2,
            category: 'Personal',
            isActive: false
        },
        {
            id: 3,
            category: 'Time managment',
            isActive: false
        },

    ];

    const [ categoryList, setCategoryList ] = useState(initialList);
    const [ selectedCategory, setSelectedCategory ] = useState('All');

    const handleCategoryChange = (id, category) => {
      const updatedList = initialList.map((item) => {
            if (item.id === id) {
                const updatedItem = {
                    ...item,
                    isActive: !item.isActive
                };

                return updatedItem
            }
            return item
      });

      setSelectedCategory(category);
      setCategoryList(updatedList);
    }
    

    const filteredArticles = articles.filter(item => {
        return selectedCategory === "All" ? articles : item.category === selectedCategory;
    });

    return (
        <section className={styles.blog}>
                <Headline src={headlineImage.src} title='Blog' content='A collection of resources, advice and reminders for everyone who are ready to align their purpose with passion and  built a better life'  /> 
                <div className={styles.articles}>
                    <div className={styles.categories}>
                        <p>Category: </p>
                        <ul className={styles.categoryList}>
                           {categoryList.map((item)=> (
                               <li onClick={() => handleCategoryChange(item.id, item.category)} key={item.id} className={item.isActive ? [styles.categoryIsActive] : [styles.category]}>{item.category}</li>
                           ))}
                        </ul>
                        </div>
                        <div className={styles.articles__wrapper}>
                        {filteredArticles.length >= 1  
                        && filteredArticles.map(article => (
                            <Link href={`/article/${article.slug.current}`}>
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
                            </Link>
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

