import { urlFor } from '../../lib/client';
import styles from './Bestsellers.module.scss';

const Bestsellers = ({ products }) => {

    console.log(products);
    return (
        <section className={styles.bestsellers}>  
            <h2>Bestsellers</h2>

            <div className={styles.container}>
            {products.length >= 1 && products.map(product => (
                <div className={styles.product}>
                    <img src={urlFor(product?.image[0])} className={styles.image} />
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.details}>{product.details}</p>
                    <p className={styles.price}>${product.price}</p>
                </div>
            ))}
            </div>
        </section>
    )
}


export default Bestsellers;
