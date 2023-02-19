import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'
import Link from 'next/link'
import { CartProvider } from 'use-shopping-cart'
import { useRouter } from 'next/router'
import { Cart } from '../components/Header/Cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  const showCartButton = pathname !== '/success'

  return (
    <CartProvider
      cartMode="checkout-session"
      stripe=""
      currency="USD"
      loading={<p aria-live="polite">Loading</p>}
      shouldPersist
    >
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
          {showCartButton && <Cart />}
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
