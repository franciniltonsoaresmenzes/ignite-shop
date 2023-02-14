import { styled } from '..'

export const MenuListContainer = styled('main', {
  position: 'fixed',
  zIndex: 1,

  width: '30rem',
  height: '100vh',

  top: 0,
  right: '-100%',

  variants: {
    open: {
      true: {
        right: 0,
      },
    },
  },

  background: '$gray800',
  padding: '3rem',

  h2: {
    color: '$gray100',
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.6,

    marginTop: '1.5rem',
    marginBottom: '2rem',
  },
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
