import { styled } from '@/src/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const MenuListContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  position: 'absolute',
  zIndex: 1,

  width: '30rem',
  height: '100vh',

  top: 0,
  right: 0,

  background: '$gray800',
  padding: '3rem',

  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
})

export const Subtitle = styled(Dialog.Title, {
  color: '$gray100',
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: 1.6,

  marginTop: '1.5rem',
  marginBottom: '2rem',
})

export const MenuLisFlex = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1.5rem',
  flex: 1,
})

export const ProductMenuList = styled('section', {
  display: 'flex',
  gap: '1.25rem',
})

export const ProductMenuListImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
})

export const DescriptionMenuList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: 1.6,

  h3: {
    fontWeight: 400,
    color: '$gray300',
  },

  span: {
    color: '$gray100',
  },
})

export const ButtonRemove = styled('button', {
  display: 'block',
  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: 1.6,
  width: 65,
  border: 0,
  background: 'transparent',
  color: '$green500',
  '&:hover': {
    color: '$green300',
  },
})

export const ButtonClose = styled('button', {
  background: 'transparent',
  border: 0,
  borderRadius: 6,
  position: 'absolute',
  top: '28px',
  right: '28px',
  cursor: 'pointer',
})

export const MenuLisFlexPrices = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  color: '$gray100',
  lineHeight: 1.6,

  span: {
    fontWeight: 400,
    fontSize: '1rem',
  },
  'span + span': {
    fontSize: '1.125rem',
    color: '$gray300',
  },

  h3: {
    fontSize: '1.125rem',
  },

  'h3 + h3': {
    fontSize: '1.5rem',
  },
})
