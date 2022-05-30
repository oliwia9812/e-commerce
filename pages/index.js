import { client } from '../lib/client' ;
import Hero from '../components/Hero/Hero';
import Bestsellers from '../components/Bestsellers/Bestsellers';

export default function Home({bannerData, products}) {

  return (
    <>
      <Hero heroBannerData={bannerData.length && bannerData[0]} />
      <Bestsellers products={products} />
    </>
  )
}


export const getServerSideProps = async () => {
    const bannerData = await client.fetch(`*[_type == "heroBanner"]`);
    const products = await client.fetch(`*[_type == "product"]`);

    return {
      props: {
        bannerData,
        products
      }
    }
}