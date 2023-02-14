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
import { useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [openMenu, isOpenMenu] = useState(false)
  const lenghtCheckout = 0

  function handleOpenMenu() {
    isOpenMenu(!openMenu)
  }

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <CheckoutHeaderContainer onClick={handleOpenMenu}>
          {lenghtCheckout > 0 && (
            <CheckoutLenght>{lenghtCheckout}</CheckoutLenght>
          )}
          <Handbag size={24} weight="bold" />
        </CheckoutHeaderContainer>

        <MenuList open={openMenu} />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
