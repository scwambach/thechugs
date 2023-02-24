import { noOrphans } from './noOrphans'
import { sanitizeString } from './sanitizeString'
export const highlighter = (string: string): any => {
  const wordArray: string[] = string.split(' ')

  const wordReturn: (string | JSX.Element)[] = wordArray.map((word: string) => {
    const inBrackets: boolean = word.indexOf('[') >= 0
    if (!inBrackets) return sanitizeString(word)
    const matchedString: string = word.match(/\[\[([^\]]+)\]\]/)![1]
    return `<span class="highlight">${sanitizeString(matchedString)}</span>`
  })

  return noOrphans(wordReturn.join(' '))
}
