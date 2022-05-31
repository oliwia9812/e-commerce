import { urlFor } from '../../lib/client';
import styles from './Bestsellers.module.scss';
import Button from '../Button/Button';

const Bestsellers = ({ products }) => {

    return (
        <section className={styles.bestsellers}>  
            <h2>Bestsellers</h2>
            <div className={styles.container}>
            {products.length >= 1 && products.map((product, idx) => (
                <div key={product._id} className={styles.product}>
                    <div className={styles.imageContainer}>
                        <img src={urlFor(product?.image[0])} className={styles.image}/>
                    </div>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.details}>{product.details}</p>
                    <p className={styles.price}>${product.price}</p>
                    <Button outline textButton='Add to cart' />
                </div>
            ))}
            </div>
        </section>
    )
}


export default Bestsellers;
