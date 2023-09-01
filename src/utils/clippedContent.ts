export const clippedContent = (string: string, limit: number) => {
  if (string.length > limit) {
    return `${string.slice(0, limit)}...`
  }
  return string
}
