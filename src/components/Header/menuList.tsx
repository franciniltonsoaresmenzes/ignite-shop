import {
  ButtonClose,
  DescriptionMenuList,
  MenuListContainer,
  ProductMenuList,
  ProductMenuListImage,
} from '@/src/styles/components/menuList'
import Image from 'next/image'
import { X } from 'phosphor-react'
import camisa1 from '../../assets/camisas/Camisa1.png'
import * as Dialog from '@radix-ui/react-dialog'

export default function MenuList() {
  return (
    <MenuListContainer>
      <Dialog.Close asChild>
        <ButtonClose>
          <X size={24} color="#8D8D99" />
        </ButtonClose>
      </Dialog.Close>
      <h2>Sacola de compras</h2>
      <div>
        <ProductMenuList>
          <ProductMenuListImage>
            <Image src={camisa1} width={95} height={95} alt="" />
          </ProductMenuListImage>

          <DescriptionMenuList>
            <h3>Camiseta Beyond the Limits</h3>
            <span>R1 79,90</span>
            <a href="">Remover</a>
          </DescriptionMenuList>
        </ProductMenuList>
      </div>
    </MenuListContainer>
  )
}
