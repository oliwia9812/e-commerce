import { client } from "../../lib/client";
import styles from '../styles/slug.module.scss';
import Button from '../../components/Button/Button';
import { urlFor } from "../../lib/client";
import { useState } from "react";
import Bestsellers from '../../components/Bestsellers/Bestsellers';

const ProductDetails = ({ product, products }) => {

    const { name, image, price, details } = product;
    const [ index, setIndex ] = useState(0);


    return (
        <>
        <section className={styles.productDetails}>
            <div className={styles.imagesWrapper}>
                {image.length > 1 && <div className={styles.smallImages}>
                    {image?.map((item, i) => (
                         <div className={styles.smallImageContainer}>
                            <img onMouseOver={()=>setIndex(i)} className={styles.smallImage} src={urlFor(item)} />
                        </div>
                    ))}
                </div>}
                
                <div className={styles.selectedImageContainer}>
                   <img src={urlFor(image && image[index])} className={styles.selectedImage} />
                </div>
            </div>
            <div className={styles.detailsWrapper}>
                <div>
                    <h2 className={styles.productName}>
                        {name}
                    </h2>
                    <p className={styles.productPrice}>
                        {price} zł
                    </p>
                </div>
                <p className={styles.productDesc}>
                   {details}
                </p>
                <Button textButton={'Add to cart'}></Button>
            </div>
        </section>
        <h2>You may also like</h2>
        <Bestsellers products={products} />
        </>
    )
}


export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
  
  export const getStaticProps = async ({ params: {slug}}) => {
      const product = await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]`);
      const products = await client.fetch(`*[_type == "product" && category == "bestseller"]`);
    
      return {
        props: { product, products}
      }
  }

export default ProductDetails;