export const toUsCurrency = (amount: number): string => {
  // convert number to dolar amount with 2 decimal places
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })
}
