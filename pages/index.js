import { client } from '../lib/client' ;
import Hero from '../components/Hero/Hero';
import Bestsellers from '../components/Bestsellers/Bestsellers';
import About from '../components/About/About'
import Features from '../components/Features/Features';
import Social from '../components/Social/Social';
import Newsletter from '../components/Newsletter/Newsletter';

export default function Home({bannerData, bestsellerProducts}) {

  return (
    <div>
        <Hero heroBannerData={bannerData.length && bannerData[0]} />
        <About />
        <Bestsellers products={bestsellerProducts} />
        <Features />
        <Social />

    </div>
  )
}


export const getServerSideProps = async () => {
    const bannerData = await client.fetch(`*[_type == "heroBanner"]`);
    const bestsellerProducts = await client.fetch(`*[_type == "product" && category == "bestseller"]`);

    return {
      props: {
        bannerData,
        bestsellerProducts
      }
    }
}