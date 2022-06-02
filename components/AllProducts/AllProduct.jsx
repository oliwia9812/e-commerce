import styles from './AllProducts.module.scss';
import { urlFor } from '../../lib/client';
import { IoCartOutline } from 'react-icons/io5';

const AllProducts = ({ products }) => {

    console.log(products);

    return (
       <section className={styles.allProducts}>
        <div className={styles.container}>
            {products.length >= 1 && products.map(product => (
                 <div className={styles.product}>
                     <div className={styles.product__imageContainer}> 
                        <IoCartOutline className={styles.product__cartIcon} />
                        <img className={styles.product__image} src={urlFor(product.image[0])} />
                     </div>  
                 <div className={styles.product__details}>
                         <p className={styles.product__name}>{product.name}</p>
                         <p className={styles.product__price}>{product.price} zł</p>
                 </div>
             </div>
            ))}
        </div>
       </section>
    )
}

export default AllProducts;