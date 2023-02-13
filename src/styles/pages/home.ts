import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,0.6)',

    overflow: 'hidden',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const ProductLoading = styled('div', {
  '> div': {
    background: '$gray800',
  },

  display: 'grid',
  gap: '1.5rem',
  gridTemplateRows: '1.5fr 0.5fr',
})

export const DetailsLoading = styled('span', {
  display: 'flex',
  justifyContent: 'space-between',
  height: '2.5rem',
  gap: 50,

  div: {
    borderRadius: 8,
    width: '50%',
    background: '$gray800',
  },

  '> div': {
    width: '20.625rem',
  },

  'div + div': {
    width: '6.25rem',
  },
})

export const CarouselArrow = styled('div', {
  position: 'fixed',
  right: 0,
  top: 0,

  width: '6rem',
  height: '100vh',

  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',

  svg: {
    position: 'absolute',
    top: 'calc(50% - 48px/2)',
    left: 16,
  },

  color: '$white',

  variants: {
    left: {
      true: {
        left: 0,
        background:
          'linear-gradient(90deg, rgba(18, 18, 20, 0.75) 0%,  rgba(18, 18, 20, 0) 100%)',
      },
    },
    disabled: {
      true: {
        display: 'none',
      },
    },
  },
})
