import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'
import MenuList from '../components/Header/menuList'
import {
  CheckoutHeaderContainer,
  CheckoutLenght,
} from '../styles/components/checkoutHeader'
import { Handbag } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const lenghtCheckout = 1

  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CheckoutHeaderContainer lenght={lenghtCheckout > 0}>
              {lenghtCheckout > 0 && (
                <CheckoutLenght>{lenghtCheckout}</CheckoutLenght>
              )}
              <Handbag size={24} weight="bold" />
            </CheckoutHeaderContainer>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <MenuList />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
