export const getDomain = (url: string) => {
  return url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .replace('.com', '')
    .replace('.org', '')
    .replace('.net', '')
    .replace('.io', '')
    .split(/[/?#]/)[0]
}
