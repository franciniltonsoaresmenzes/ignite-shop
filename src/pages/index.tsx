import Image from 'next/image'
import Link from 'next/link'

import { useKeenSlider } from 'keen-slider/react'

import {
  CarouselArrow,
  DetailsLoading,
  HomeContainer,
  Product,
  ProductLoading,
} from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import Head from 'next/head'
import { CaretLeft, CaretRight, Handbag } from 'phosphor-react'
import { useState } from 'react'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 'auto', spacing: loading ? 20 : 19 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoading(true)
    },
  })

  return (
    <>
      <Head>
        <title>Home - Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {loading &&
          products.map((product, index) => (
            <Link
              href={`/product/${product.id}`}
              legacyBehavior={false}
              prefetch={false}
              key={product.id}
            >
              <Product
                className={`keen-slider__slide number-slide${index + 1}`}
              >
                <Image src={product.imageUrl} width={520} height={480} alt="" />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button>
                    <Handbag size={32} weight="bold" />
                  </button>
                </footer>
              </Product>
            </Link>
          ))}

        {!loading &&
          Array.from({ length: 3 }).map((_, index) => (
            <ProductLoading key={index} className="keen-slider__slide">
              <div />
              <DetailsLoading>
                <div />
                <div />
              </DetailsLoading>
            </ProductLoading>
          ))}
      </HomeContainer>
      <CarouselArrow>
        <CaretRight size={48} onClick={() => instanceRef.current?.next()} />
      </CarouselArrow>
      <CarouselArrow left disabled={currentSlide === 0}>
        <CaretLeft size={48} onClick={() => instanceRef.current?.prev()} />
      </CarouselArrow>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
