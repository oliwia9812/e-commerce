import { urlFor } from '../../lib/client';
import styles from './Bestsellers.module.scss';
import Button from '../Button/Button';
import Link from 'next/link';

const Bestsellers = ({ products }) => {

    
    return (
        <section className={styles.bestsellers}>  
            <div className={styles.container}>
            {products.length >= 1 && products.map((product) => (
                <Link href={`/product/${product.slug.current}`}>
                <div key={product._id} className={styles.product}>
                    <div className={styles.imageContainer}>
                        <img src={urlFor(product?.image[0])} className={styles.image}/>
                    </div>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.price}>${product.price}</p>
                    <Button outline textButton='Add to cart' />
                </div>
                </Link>
            ))}
            </div>
        </section>
    )
}


export default Bestsellers;
