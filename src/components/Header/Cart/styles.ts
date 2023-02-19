import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@/src/styles'

export const CheckoutHeaderContainer = styled('button', {
  position: 'relative',
  width: '48px',
  height: '48px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: '$gray800',
  color: '#8D8D99',
  borderRadius: 6,
  border: 0,
  cursor: 'pointer',

  variants: {
    lenght: {
      true: {
        color: '$gray300',
      },
    },
  },
})

export const CheckoutLenght = styled('span', {
  position: 'absolute',
  right: '-7px',
  top: '-7px',

  background: '$green500',
  width: 24,
  height: 24,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: 1000,

  border: '3px solid $gray900',

  color: '$white',
  fontSize: '0.875rem',
  fontWeight: 700,
  lineHeight: 1.6,
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0 0 0 / 0.7)',
  backdropFilter: 'blur(4px)',

  "&[data-state='open']": {
    animation: '0 0.1s ease-in',
  },

  "&[data-state='closed']": {
    animation: '1 0.1s ease-out',
  },
})
