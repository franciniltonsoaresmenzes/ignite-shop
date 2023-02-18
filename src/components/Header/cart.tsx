import * as Dialog from '@radix-ui/react-dialog'
import {
  CheckoutHeaderContainer,
  CheckoutLenght,
} from '../../styles/components/checkoutHeader'
import { Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
import MenuList from './menuList'

export default function Cart() {
  const { cartCount } = useShoppingCart()
  const lenghtCheckout = cartCount ?? 0
  return (
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
  )
}
