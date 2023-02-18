import { convertNumberInPrice } from '../../hook/convertNumberInPrice'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()
  const { cartDetails, addItem, cartCount } = useShoppingCart()

  const productsCart = Object.values(cartDetails ?? {})
  const lenghtCheckout = cartCount ?? 0

  if (isFallback) {
    return <p>Loading</p>
  }

  function handleAddItemCart(product: IProduct) {
    if (!existProduct(product.id)) {
      addItem({
        currency: 'BRL',
        id: product.id,
        name: product.name,
        price: parseInt(product.price),
        price_id: product.defaultPriceId,
        image: product.imageUrl,
        description: product.description,
      })
    }
  }

  function existProduct(idProduct: string) {
    const exist =
      productsCart.filter((products) => products.id === idProduct).length === 0
    if (exist) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} - Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{convertNumberInPrice(parseInt(product.price))}</span>
          <p>{product.description}</p>
          <button
            disabled={lenghtCheckout > 0}
            onClick={() => handleAddItemCart(product)}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NK0hnyPib9Rj2M' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = typeof params?.id === 'undefined' ? '' : params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount as number,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
