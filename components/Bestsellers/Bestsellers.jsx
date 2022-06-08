import React from 'react';
import { urlFor } from '../../lib/client';
import styles from './Bestsellers.module.scss';
import Button from '../Button/Button';
import Link from 'next/link';
import { useStateContext } from '../../context/StateContext';


const Bestsellers = ({ products }) => {

    const { onAdd } = useStateContext();

    const handleAdd = (e, product) => {
        e.stopPropagation();

        onAdd(product, 1);
    }

    return (
        <section className={styles.bestsellers}>  
            <div className={styles.container}>
            {products.length >= 1 && products.map((product, i) => (
                <Link key={i} href={`/product/${product.slug.current}`}>
                    <div key={product._id} className={styles.product}>
                        <div className={styles.imageContainer}>
                            <img src={urlFor(product?.image[0])} className={styles.image}/>
                        </div>
                        <h3 className={styles.name}>{product.name}</h3>
                        <p className={styles.price}>${product.price}</p>
                        <Button onClick={(e) => handleAdd(e, product)} outline textButton={'Add to cart'} />
                    </div>
                </Link>
            ))}
            </div>
        </section>
    )
}


export default Bestsellers;
