export const noOrphans = (string: string) => {
  // make sure there is a &nbsp; before the last word
  return string.replace(/\s(?=[^\s]*$)/g, '\u00A0\u00A0')
}
