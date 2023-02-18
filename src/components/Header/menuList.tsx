import {
  ButtonClose,
  ButtonRemove,
  DescriptionMenuList,
  MenuLisFlex,
  MenuLisFlexPrices,
  MenuListContainer,
  ProductMenuList,
  ProductMenuListImage,
} from '@/src/styles/components/menuList'
import Image from 'next/image'
import { X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/src/styles/components/Button'
import { useShoppingCart } from 'use-shopping-cart'
import { convertNumberInPrice } from '@/src/hook/convertNumberInPrice'
import { useState } from 'react'
import axios from 'axios'

export default function MenuList() {
  const [isCreatingChekcoutSession, setIsCreatingChekcoutSession] =
    useState(false)
  const { cartDetails, removeItem, totalPrice, cartCount } = useShoppingCart()

  const products = Object.values(cartDetails ?? {})

  const lenghtCheckout = cartCount ?? 0

  function handleRemoveItemCart(id: string) {
    removeItem(id)
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingChekcoutSession(true)
      const response = await axios.post('/api/checkout', {
        products,
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      console.log(err)
      setIsCreatingChekcoutSession(false)
    }
  }
  return (
    <MenuListContainer>
      <Dialog.Close asChild>
        <ButtonClose>
          <X size={24} color="#8D8D99" />
        </ButtonClose>
      </Dialog.Close>
      <h2>Sacola de compras</h2>
      <MenuLisFlex>
        {products.map((product) => (
          <ProductMenuList key={product.id}>
            <ProductMenuListImage>
              <Image src={product.imageUrl} width={95} height={95} alt="" />
            </ProductMenuListImage>
            <DescriptionMenuList>
              <h3>{product.name}</h3>
              <span>{convertNumberInPrice(product.price)}</span>
              <ButtonRemove onClick={() => handleRemoveItemCart(product.id)}>
                Remover
              </ButtonRemove>
            </DescriptionMenuList>
          </ProductMenuList>
        ))}
      </MenuLisFlex>
      <div>
        <MenuLisFlexPrices>
          <span>Quantidade</span>
          <span>{lenghtCheckout} itens</span>
        </MenuLisFlexPrices>
        <MenuLisFlexPrices>
          <h3>Valor total</h3>
          <h3>{convertNumberInPrice(totalPrice as number)}</h3>
        </MenuLisFlexPrices>
      </div>
      <Button
        disabled={isCreatingChekcoutSession || !lenghtCheckout > 0}
        onClick={handleBuyProduct}
      >
        Finalizar compra
      </Button>
    </MenuListContainer>
  )
}
