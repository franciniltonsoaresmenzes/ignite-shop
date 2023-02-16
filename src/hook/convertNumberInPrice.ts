export function convertNumberInPrice(price: number): string {
  return new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price / 100)
}
