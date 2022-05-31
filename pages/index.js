import { client } from '../lib/client' ;
import Hero from '../components/Hero/Hero';
import Bestsellers from '../components/Bestsellers/Bestsellers';
import About from '../components/About/About'
import Features from '../components/Features/Features';
import Social from '../components/Social/Social';

export default function Home({bannerData, products}) {

  return (
    <div>
        <Hero heroBannerData={bannerData.length && bannerData[0]} />
        <About />
        <Bestsellers products={products} />
        <Features />
        <Social />
    </div>
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