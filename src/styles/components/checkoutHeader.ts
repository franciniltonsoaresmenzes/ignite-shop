import { styled } from '..'

export const CheckoutHeaderContainer = styled('button', {
  position: 'relative',
  padding: '0.75rem',
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
