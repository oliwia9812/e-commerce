import React from 'react';
import headlineImage from '../assets/headline_shop.jpg'
import AllProducts from '../components/AllProducts/AllProduct';
import Headline from '../components/Headline/Headline';
import { client } from '../lib/client';

const Shop = ({ products }) => {

    return (
        <>
            <Headline src={headlineImage.src} title='Shop all' content='Discover our beautifully designed goal-setting and personal development stationery.' />
            <AllProducts products={products} />
       </>
    )
}

export const getServerSideProps = async() => {
    const products = await client.fetch(`*[_type == "product"]`);

    return { 
        props: {
            products
        }
    }
}

export default Shop;