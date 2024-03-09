import MarkdownIt from 'markdown-it'
import { slugify } from './slugify'

const mdParser = new MarkdownIt()

// Add custom heading rendering
mdParser.use((md) => {
  const defaultHeadingRender = md.renderer.rules.heading_open
  md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrJoin('id', `${slugify(tokens[idx + 1].content)}`)
    if (defaultHeadingRender) {
      return defaultHeadingRender(tokens, idx, options, env, self)
    } else {
      return self.renderToken(tokens, idx, options)
    }
  }
})

export const parseMarkdownToHTML = (markdown: string) => {
  return mdParser.render(markdown)
}
