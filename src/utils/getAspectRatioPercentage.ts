export function getAspectRatioPercentage({
  width,
  height,
}: {
  width: number
  height: number
}): string {
  if (!width || !height) {
    throw new Error(
      'Both width and height are required to calculate the aspect ratio.'
    )
  }
  const aspectRatioPercentage = (height / width) * 100
  return `${aspectRatioPercentage}%`
}
