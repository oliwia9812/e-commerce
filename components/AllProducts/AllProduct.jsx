import styles from './AllProducts.module.scss';
import { urlFor } from '../../lib/client';
import { IoCartOutline } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';

const AllProducts = ({ products }) => {

    const [ showPopover, setShowPopover ] = useState(false);

    const handleOpen = () => {
        setShowPopover(prevState => !prevState);
    }

    return (
    
       <section className={styles.allProducts}>
        <div className={styles.container}>
            <button onClick={handleOpen} className={styles.sortButton}> Sort by</button>
           {showPopover &&  <div className={styles.popover}>
                <div className={styles.popover__content}>
                    <ul className={styles.popover__messageWrapper}>
                        <li className={styles.popover__message}>best selling</li>
                        <li className={styles.popover__message}>alphabetically, a-z</li>
                        <li className={styles.popover__message}>alphabetically, z-a</li>
                        <li className={styles.popover__message}>price, low to high</li>
                        <li className={styles.popover__message}>price, high to low </li>
                        <li className={styles.popover__message}>date, old to new</li>
                        <li className={styles.popover__message}>date, new to old</li>
                    </ul>
                </div>
            </div>
            }
            {products.length >= 1 && products.map(product => (
                <Link href={`/product/${product.slug.current}`}>
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
             </Link>
            ))}
        </div>
       </section>
    )
}

export default AllProducts;