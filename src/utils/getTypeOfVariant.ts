export const getTypeOfVariant = (variants: string[]) => {
  // check if there's a color option before size (e.g. "Red / S")
  const hasColor = variants.some((variant) => variant.includes('/'))

  if (hasColor) {
    return 'color and size'
  }

  // check if variants contain S, M, L, XL in any of the strings in the array
  const hasSmall = variants.some((variant) => variant.includes('S'))
  const hasMedium = variants.some((variant) => variant.includes('M'))
  const hasLarge = variants.some((variant) => variant.includes('L'))
  const hasXLarge = variants.some((variant) => variant.includes('XL'))

  if (hasSmall && hasMedium && hasLarge && hasXLarge) {
    return 'a size'
  }

  return 'an option'
}
